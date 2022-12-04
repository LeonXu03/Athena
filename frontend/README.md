## `Project Folder Structure`

### \src

> App.tsx
> App.css
> Index.tsx
> Index.css

> #### \Components
>
> > \common \*\*Frequently used components, PascalCase all components
> >
> > > CreateButton.tsx
> > > TicketPresentational.tsx
> > > etc..

> > \home \*\* Each page will have their own specific components
> > \login

> #### \Pages \*\*PascalCase pages
>
> > HomePage.tsx
> > LoginPage.tsx
> > SignUpPage.tsx
> > etc..

> CONSTANTS.tsx \*\* For fonts and colours

> #### \Redux \*\*not finalized
>
> > store.ts
> > \slices
> >
> > > authSlice.ts
> > > sprintSlice.ts

> #### \Hooks \*\*For common resuable custom hooks

> #### \Assets \*\*Images, icons, etc.. if needed

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.
