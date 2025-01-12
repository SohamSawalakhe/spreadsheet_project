# Google Sheets Mimic Web Application

This project implements a web application mimicking Google Sheets, developed using Django. The application closely replicates the user interface and core functionalities of Google Sheets, focusing on mathematical, data quality functions, data entry, and key UI interactions.

## Features

### 1. Spreadsheet Interface

- **Mimic Google Sheets UI**: The interface includes a toolbar, formula bar, and a grid layout.
- **Drag Functions**: Users can drag to copy formulas, cell content, and selections.
- **Cell Dependencies**: Formulas automatically update based on changes to dependent cells.
- **Basic Formatting**: Bold, italics, font size, and color support for cells.
- **Add/Delete/Resize Rows and Columns**: Users can dynamically add, remove, and resize rows and columns.

### 2. Mathematical Functions

- **SUM**: Calculates the sum of a range of cells.
- **AVERAGE**: Calculates the average of a range of cells.
- **MAX**: Returns the maximum value from a range of cells.
- **MIN**: Returns the minimum value from a range of cells.
- **COUNT**: Counts the number of cells containing numerical values.

### 3. Data Quality Functions

- **TRIM**: Removes leading and trailing whitespace from text.
- **UPPER**: Converts text to uppercase.
- **LOWER**: Converts text to lowercase.
- **REMOVE_DUPLICATES**: Removes duplicate rows from a selected range.

### 4. Data Entry and Validation

- Users can input numbers, text, and dates into cells.
- Basic data validation is implemented to ensure numeric cells only contain numbers.

### 5. Save and Load Functionality

- Save the current spreadsheet to local storage.
- Load previously saved spreadsheets.

### 6. Testing and Functionality

- Users can test implemented functions with their own data.
- Results of function execution are displayed clearly.

## Bonus Features

- Support for more complex formulas and cell referencing (absolute and relative references).
- Data visualization with charts and graphs (to be implemented).
- Ability to handle a wide variety of mathematical and data quality functions.

## Tech Stack

- **Backend**: Django (Python)
- **Frontend**: HTML, CSS, JavaScript (jQuery for DOM manipulation)
- **Libraries**: Bootstrap (for UI styling), Font Awesome (for icons)

## Setup

### Prerequisites

- Python 3.x
- Django 3.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SohamSawalakhe/spreadsheet_project.git
   ```
