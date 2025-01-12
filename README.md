# Google Sheets Mimic Web Application  

## Overview  
This project is a web application that mimics the core functionalities and user interface of Google Sheets. It allows users to perform spreadsheet operations, mathematical and data quality functions, and manage data interactively.

---

## Features  

### 1. Spreadsheet Interface  
- **Google Sheets-Like UI**: Toolbar, formula bar, and grid layout for seamless interaction.  
- **Dynamic Cell Behavior**:  
  - Drag to copy formulas, values, or selections.  
  - Real-time updates for formulas when dependent cells change.  
- **Formatting Options**:  
  - Bold, italics, font size, text color, and background color.  
- **Row and Column Management**:  
  - Add, delete, and resize rows/columns dynamically.  

### 2. Mathematical Functions  
- `SUM`: Calculates the sum of a range of cells.  
- `AVERAGE`: Calculates the average of a range of cells.  
- `MAX`: Returns the maximum value from a range of cells.  
- `MIN`: Returns the minimum value from a range of cells.  
- `COUNT`: Counts the number of numeric values in a range.  

### 3. Data Quality Functions  
- `TRIM`: Removes leading and trailing whitespace from cell values.  
- `UPPER`: Converts text to uppercase.  
- `LOWER`: Converts text to lowercase.  
- `REMOVE_DUPLICATES`: Removes duplicate values from a selected range.  
- `FIND_AND_REPLACE`: Find and replace specific text across cells.  

### 4. Save and Load Functionality  
- Save spreadsheets locally in the browser's local storage.  
- Reload previously saved spreadsheets.  

### 5. Bonus Features  
- Support for relative and absolute references (e.g., `$A$1`, `A1:A3`).  
- Error handling for invalid formulas.  
- Real-time feedback on formula execution.

---

## Tech Stack  
- **Backend**: Django (Python)  
- **Frontend**: HTML, CSS, JavaScript (jQuery, Bootstrap)  
- **Libraries**: Font Awesome for icons  

---

## Installation  

### Prerequisites  
Ensure you have the following installed:  
- Python 3.x  
- pip (Python package manager)  

### Steps to Set Up and Run  

1. Clone this repository:

   ```bash
   git clone https://github.com/SohamSawalakhe/spreadsheet_project.git
   cd spreadsheet
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the Django server:

   ```bash
   python manage.py runserver
   ```

4. Access the chatbot in your browser at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Improve cell dependency handling for complex scenarios.
License
This project is licensed under the MIT License.



