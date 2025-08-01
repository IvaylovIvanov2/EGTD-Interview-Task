```bash
npm install
npm run dev
```

## 👩‍💻 Interview Task

1. Write the logic of the [useUsers](./hooks/useUsers.ts) hook that fetches users from JSONPlaceholder API and returns them with a loading state. You will find the API url inside.

2. You must add the rendering logic for the users in the [UserGrid](./components/UserGrid.tsx) component.

3. You must show a loading state when fetching users. (a simple paragraph with 'Loading...' is enough).

4. You must show an error state if fetching the users fails. (you can just display the error's message in a paragraph)

Bonus Tasks

1. You can use axios for the request for bonus points.

2. You can complete the empty User interface according to the necessary data for [UserCard](./components/UserCard.tsx) and use it across the app for bonus points.

3. The grid rows are currently rendering only 3 elements per row, leaving a lot of empty space between the User cards, you can set them to 5 elements per row for bonus points and better styling.
