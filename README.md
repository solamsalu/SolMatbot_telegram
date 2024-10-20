
# SolMatBot - Mathematics Teaching Telegram Bot

SolMatBot is a Node.js-based Telegram bot designed to facilitate the teaching of mathematics. The bot provides study materials, quizzes, assignments, worksheets, and reference links for various mathematics chapters. It also integrates a discussion group for users to interact and ask questions.

## Features

- **Chapter Study Materials:** Links to resources for various math chapters.
- **Quizzes:** Allows users to take quizzes for each chapter.
- **Assignments:** Provides assignments for students to complete.
- **Model Final Exam:** Offers a model final exam to help students prepare.
- **Worksheets:** Provides additional practice worksheets for students.
- **Math Tips:** Offers helpful tips to improve mathematical skills.
- **Discussion Group Integration:** Ensures that only users who are members of a specific discussion group can interact with the bot.
- **Feedback & Help:** Allows users to provide feedback and request help when needed.
- **Interactive Buttons:** Inline buttons for quick navigation and interaction.

## Technologies Used

- [Node.js](https://nodejs.org/) – Backend JavaScript runtime.
- [TeleBot](https://github.com/mullwar/telebot) – A simple wrapper for Telegram Bot API.
- [Axios](https://axios-http.com/) – For making HTTP requests.
- [dotenv](https://github.com/motdotla/dotenv) – To manage environment variables.

## Getting Started

### Prerequisites

- **Node.js** (v14+)
- **Telegram Bot Token:** You will need a token for your bot from the [BotFather](https://t.me/BotFather).
- **Git** (optional, for version control)
- **Heroku/Railway** (for free deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/SolMatBot.git
   cd SolMatBot
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

4. Add your Telegram bot token and other environment variables to `.env`:
   ```bash
   BOT_TOKEN=your-telegram-bot-token
   ```

### Running the Bot Locally

To start the bot, run the following command:

```bash
node index.js
```

The bot will be up and running, and you should see `[bot.info] bot started` in the console.

### Commands

- **/start**: Displays the welcome message and shows the inline buttons for chapter selection, quizzes, assignments, and more.
- **Chapter 1: Algebra**: Provides study material for Chapter 1 and links to reference material and textbooks.
- **Quiz 1**: Takes the user to the first quiz.
- **Assignment 1**: Sends the first assignment to users.
- **Model Final Exam**: Sends a model final exam to users for preparation.
- **Worksheets**: Provides practice worksheets for students.
- **Math Tips**: Sends helpful math tips.
- **Feedback**: Allows users to provide feedback on the bot.
- **Help**: Sends a help message to guide users on how to interact with the bot.

### Deployment

#### Deploy on Heroku or Railway

1. **For Railway**: Follow the steps provided in the official [Railway documentation](https://railway.app/docs).
   
2. **For Heroku**:
   - Create a new Heroku app:
     ```bash
     heroku create
     ```
   - Push your code to Heroku:
     ```bash
     git push heroku main
     ```
   - Set the bot token environment variable in Heroku:
     ```bash
     heroku config:set BOT_TOKEN=your-telegram-bot-token
     ```
   - Scale the bot:
     ```bash
     heroku ps:scale web=1
     ```

## Project Structure

```
├── index.js         # Main bot logic
├── utils.js         # Helper functions like error handling
├── .env             # Environment variables
├── .gitignore       # Git ignore file
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

## Contributing

Feel free to open issues or submit pull requests if you find bugs or want to improve the bot.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
