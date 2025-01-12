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

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/SohamSawalakhe/spreadsheet_project.git
   cd spreadsheet_project


Install Dependencies
Install all required Python packages from requirements.txt:

bash
Copy code
pip install -r requirements.txt
Migrate the Database
Initialize the database for the Django application:

bash
Copy code
python manage.py migrate
Run the Development Server
Start the application server:

bash
Copy code
python manage.py runserver
Access the Application
Open your browser and navigate to:

arduino
Copy code
http://127.0.0.1:8000/
Usage
Spreadsheet Interface:

Use the toolbar for formatting, adding/removing rows and columns, and managing data.
Click on a cell to enter data or formulas.
Formulas:

Enter formulas in the formula bar (e.g., =SUM(A1:A5)).
Select a function from the dropdown to autofill the formula bar with a template.
Testing:

Add sample data to test mathematical and data quality functions.
Save and Load:

Save the current state using the Save button in the toolbar.
Reload saved data using the Load button.
Directory Structure
csharp
Copy code
google-sheets-mimic/
├── manage.py                 # Django management script
├── app/                      # Main application directory
│   ├── migrations/           # Database migration files
│   ├── static/               # Static files (CSS, JS, images)
│   ├── templates/            # HTML templates
│   ├── views.py              # View functions
│   ├── models.py             # Database models
│   ├── urls.py               # URL routing
├── requirements.txt          # Python dependencies
└── README.md                 # Project documentation
Known Issues and Limitations
Advanced charts and graphs are not yet implemented.
Cross-cell referencing may have limited support for edge cases.
Future Enhancements
Add data visualization tools like charts and graphs.
Improve cell dependency handling for complex scenarios.
License
This project is licensed under the MIT License.



