# ⏱️ Time Countdown App

A React-based timing challenge game where players test their reflexes by stopping a timer as close as possible to the target time.

## 🎮 Features

- **Player Registration**: Enter your name to personalize the experience
- **Multiple Difficulty Levels**: Four different challenges with varying target times
  - Easy: 1 second
  - Not Easy: 5 seconds  
  - Getting Tough: 10 seconds
  - Pros Only: 15 seconds
- **Real-time Timer**: Visual feedback showing when the timer is active
- **Score Calculation**: Get scored based on how close you stop to the target time
- **Modal Results**: Clean result display showing your performance
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd Time-count
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 How to Play

1. **Enter Your Name**: Type your name in the input field and click "Set Name"
2. **Choose a Challenge**: Select from four different difficulty levels
3. **Start the Timer**: Click the "Start" button to begin the countdown
4. **Stop at the Right Moment**: Click "Stop" when you think the target time has elapsed
5. **Check Your Score**: View your results in the modal that appears
6. **Try Again**: Close the modal and attempt the challenge again to improve your score

## 📊 Scoring System

- **Perfect Timing**: 100 points (stopped exactly at target time)
- **Partial Score**: Points decrease based on how far you are from the target
- **Too Late**: 0 points (timer expired before you stopped it)

## 🛠️ Built With

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling and animations
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
Time count/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Player.jsx     # Player name input component
│   │   ├── TimerChallenge.jsx  # Main timer game component
│   │   └── ResultModal.jsx     # Results display modal
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Key Components

### Player Component
- Handles player name input and display
- Uses React refs and state management
- Provides personalized welcome message

### TimerChallenge Component
- Manages timer logic and game state
- Handles start/stop functionality
- Calculates remaining time and triggers results

### ResultModal Component
- Displays game results using HTML dialog
- Shows score calculation and performance feedback
- Uses forwardRef for imperative handle access

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎯 Game Mechanics

The app uses `setTimeout` and `Date.now()` for precise timing:
- Timer starts when player clicks "Start"
- Countdown runs for the specified target time
- Player can stop anytime before expiration
- Score is calculated based on remaining time vs target time

## 🔧 Development

This project was created with Vite and uses modern React patterns:
- Functional components with hooks
- Ref forwarding for imperative APIs
- State management with useState
- Event handling and DOM manipulation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Happy Timing! ⏰**
