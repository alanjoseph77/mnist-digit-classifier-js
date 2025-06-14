# 🧠 MNIST Handwritten Digit Classifier (JavaScript)

**Short Description:**  
This project is a browser-based digit recognition demo using the MNIST dataset.  
It includes:

- ✍️ **Canvas Drawing Page** — Draw digits and watch how a neural network predicts them (no ML libraries).  
- 📁 **CSV Upload Page** — Upload MNIST CSV files, train a model, and test predictions (using TensorFlow.js).  

Everything runs in the browser — no backend needed.

---

## 📂 Project Pages

### 1. ✍️ **Handwritten Digit Recognition**
**File:** `index.html`

- Draw a digit on the canvas.
- Preprocessing visualizes the digit into a 784-neuron input layer.
- Watch it pass through hidden layers and the final output layer.
- Final prediction is shown, with visualization using D3.js.
- No external ML libraries are used here.

### 2. 📁 **CSV Upload & Model Training**
**File:** `test.html`

- Upload MNIST **training** and **test** CSV files.
- Configure model parameters:
  - Hidden units
  - Learning rate
  - Epochs
  - Batch size
- Train and test a neural network in the browser using **TensorFlow.js**.
- View training loss, accuracy, and predicted outputs visually.
- Use the “Show Random Predictions” button to test model predictions interactively.

---

## 🛠 Technologies Used

| Component              | Tech Used            |
|------------------------|----------------------|
| Neural Visualization   | D3.js                |
| CSV Parsing            | PapaParse.js         |
| Model Training         | TensorFlow.js        |
| Canvas Drawing         | HTML5 Canvas         |
| UI/Styling             | HTML5, CSS3, JS      |

---


## 📁 CSV File Format

- **Training CSV**  
  Format: `label, pixel1, pixel2, ..., pixel784`  
  - Example: `5, 0, 0, 12, 25, ..., 0`

- **Test CSV**  
  - With or without labels (auto-detected).
  - Must contain 784 pixel columns (28×28 grayscale image).

You can download the MNIST CSV dataset here:  
👉 [Kaggle MNIST CSV (oddRationale)](https://www.kaggle.com/datasets/oddrationale/mnist-in-csv)

---

## 🚀 Live Demo

Host this project using **GitHub Pages**:

You can also open the files locally in your browser:
- `index.html` → for digit drawing & recognition
- `test.html` → for training and testing via CSV

---

## ⚠️ Important Notes

- `index.html` works entirely **without TensorFlow**.
- `test.html` **uses TensorFlow.js** — if you want a fully custom neural net, you'll need to replace this with your own JS-based model.
- No internet connection is required after initial load.

---

## ✨ Future Improvements

- Local model saving (IndexedDB or download).
- Merge drawing + training into a single unified app.
- Add ability to import/export weights and continue training.
- Replace TensorFlow.js with a pure JS neural network implementation (for complete custom logic).

---

## 🙌 Credits

- Inspired by the MNIST dataset and its widespread educational use.
- Developed using modern browser technologies for full offline functionality.

---

## 📜 License

MIT License — feel free to fork, learn, and build upon it!


