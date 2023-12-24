# my_python_script.py

import time
import pandas

def my_periodic_function():
    print("Executing Python function...")

# Example usage if run as a standalone Python script
if __name__ == "__main__":
    while True:
        my_periodic_function()
        time.sleep(5)
