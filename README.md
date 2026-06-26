# Task Manager - React Native

A simple Task Manager mobile application built with React Native and Expo Router.

## Features

- View task list
- Add new task
- Delete task
- Mark task as completed / pending
- Task details screen
- Search tasks
- Filter tasks (All / Completed / Pending)
- Local storage using AsyncStorage
- Input validation
- Clean and responsive UI

## Technologies

- React Native
- Expo
- Expo Router
- TypeScript
- React Context API
- AsyncStorage

## Project Structure

```
app/
    _layout.tsx
    index.tsx
    add-task.tsx
    task-details.tsx

components/
    TaskItem.tsx

context/
    TaskContext.tsx

services/
    taskService.ts

storage/
    taskStorage.ts

types/
    Task.ts
```

## Installation

Clone the repository

```bash
git clone https://github.com/riionah/task-manager-react-native.git
```

Go to project folder

```bash
cd task-manager-react-native
```

Install dependencies

```bash
npm install
```

or

```bash
yarn
```

Install AsyncStorage

```bash
npx expo install @react-native-async-storage/async-storage
```

Run the project

```bash
npx expo start
```

## What was implemented

✔ Task List Screen

✔ Add Task

✔ Delete Task

✔ Toggle Complete / Pending

✔ Task Details Screen

✔ Search Tasks

✔ Filter Tasks

✔ Local Storage (AsyncStorage)

✔ Input Validation

✔ Clean Component Structure

## API

The application includes a service for fetching sample tasks from the public API:

https://jsonplaceholder.typicode.com/todos
