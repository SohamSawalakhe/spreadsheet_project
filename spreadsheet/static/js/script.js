document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll(".cell");
    const formulaBar = document.getElementById("formula-bar");
    const spreadsheet = document.getElementById("spreadsheet");
    let selectedCell = null;
    const dependencies = {};

    // --- Functionality: Selecting and Editing Cells ---
    cells.forEach(cell => {
        cell.addEventListener("click", function () {
            if (selectedCell) selectedCell.style.backgroundColor = "";
            selectedCell = cell;
            cell.style.backgroundColor = "#ffeb3b";
            formulaBar.value = cell.value;
        });

        cell.addEventListener("input", function () {
            if (dependencies[cell.dataset.cell]) {
                dependencies[cell.dataset.cell].forEach(dependentCellId => {
                    const dependentCell = document.querySelector(`[data-cell="${dependentCellId}"]`);
                    if (dependentCell) evaluateCell(dependentCell);
                });
            }
        });
    });

    formulaBar.addEventListener("change", function () {
        if (selectedCell) {
            selectedCell.value = formulaBar.value;
            evaluateCell(selectedCell);
        }
    });

    // --- Mathematical Functions ---
    document.getElementById("calculate-sum").addEventListener("click", () => calculateFunction("SUM"));
    document.getElementById("calculate-avg").addEventListener("click", () => calculateFunction("AVERAGE"));
    document.getElementById("calculate-max").addEventListener("click", () => calculateFunction("MAX"));
    document.getElementById("calculate-min").addEventListener("click", () => calculateFunction("MIN"));
    document.getElementById("count-cells").addEventListener("click", () => calculateFunction("COUNT"));

    function calculateFunction(type) {
        if (!selectedCell) return alert("Select a cell to apply the function.");
        const range = prompt(`Enter range for ${type} (e.g., A1:B2):`);
        const values = getRangeValues(range);
        if (!values) return;

        let result;
        switch (type) {
            case "SUM":
                result = values.reduce((a, b) => a + b, 0);
                break;
            case "AVERAGE":
                result = values.reduce((a, b) => a + b, 0) / values.length;
                break;
            case "MAX":
                result = Math.max(...values);
                break;
            case "MIN":
                result = Math.min(...values);
                break;
            case "COUNT":
                result = values.length;
                break;
        }
        selectedCell.value = result;
        evaluateCell(selectedCell);
    }

    // --- Data Quality Functions ---
    document.getElementById("trim-btn").addEventListener("click", () => applyDataQualityFunction("TRIM"));
    document.getElementById("upper-btn").addEventListener("click", () => applyDataQualityFunction("UPPER"));
    document.getElementById("lower-btn").addEventListener("click", () => applyDataQualityFunction("LOWER"));
    document.getElementById("remove-duplicates-btn").addEventListener("click", removeDuplicates);
    document.getElementById("find-replace-btn").addEventListener("click", findAndReplace);

    function applyDataQualityFunction(type) {
        if (!selectedCell) return alert("Select a cell to apply the function.");
        let value = selectedCell.value;
        if (!value) return;

        switch (type) {
            case "TRIM":
                value = value.trim();
                break;
            case "UPPER":
                value = value.toUpperCase();
                break;
            case "LOWER":
                value = value.toLowerCase();
                break;
        }
        selectedCell.value = value;
        evaluateCell(selectedCell);
    }

    function removeDuplicates() {
        const range = prompt("Enter range to remove duplicates (e.g., A1:A10):");
        const cells = getCellsInRange(range);
        const seen = new Set();
        cells.forEach(cell => {
            if (seen.has(cell.value)) {
                cell.value = "";
            } else {
                seen.add(cell.value);
            }
        });
    }

    function findAndReplace() {
        const findText = prompt("Enter text to find:");
        const replaceText = prompt("Enter text to replace:");
        const range = prompt("Enter range (e.g., A1:B10):");
        const cells = getCellsInRange(range);
        cells.forEach(cell => {
            cell.value = cell.value.replaceAll(findText, replaceText);
        });
    }

    // --- Drag-and-Drop Functionality ---
    let draggedCell = null;
    cells.forEach(cell => {
        cell.draggable = true;

        cell.addEventListener("dragstart", function () {
            draggedCell = cell;
        });

        cell.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        cell.addEventListener("drop", function () {
            if (draggedCell) {
                const temp = draggedCell.value;
                draggedCell.value = cell.value;
                cell.value = temp;
                evaluateCell(draggedCell);
                evaluateCell(cell);
            }
        });
    });

    // --- Helper Functions ---
    function evaluateCell(cell) {
        const value = cell.value;
        if (value.startsWith("=")) {
            try {
                const formula = value.substring(1);
                const result = eval(formula.replace(/[A-Z]+\d+/g, match => {
                    const refCell = document.querySelector(`[data-cell="${match}"]`);
                    return refCell ? parseFloat(refCell.value) || 0 : 0;
                }));
                cell.value = result;

                // Track dependencies
                const matches = formula.match(/[A-Z]+\d+/g);
                matches?.forEach(match => {
                    if (!dependencies[match]) dependencies[match] = [];
                    if (!dependencies[match].includes(cell.dataset.cell)) {
                        dependencies[match].push(cell.dataset.cell);
                    }
                });
            } catch (err) {
                cell.value = "ERROR";
            }
        }
    }

    function getCellsInRange(range) {
        const [start, end] = range.split(":");
        const startCell = document.querySelector(`[data-cell="${start}"]`);
        const endCell = document.querySelector(`[data-cell="${end}"]`);
        if (!startCell || !endCell) return null;

        const startCol = start.charCodeAt(0);
        const endCol = end.charCodeAt(0);
        const startRow = parseInt(start.substring(1), 10);
        const endRow = parseInt(end.substring(1), 10);

        const cells = [];
        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                const cellId = `${String.fromCharCode(col)}${row}`;
                const cell = document.querySelector(`[data-cell="${cellId}"]`);
                if (cell) cells.push(cell);
            }
        }
        return cells;
    }

    function getRangeValues(range) {
        const cells = getCellsInRange(range);
        if (!cells) return null;
        const values = [];
        cells.forEach(cell => {
            const value = parseFloat(cell.value);
            if (!isNaN(value)) values.push(value);
        });
        return values;
    }
});
