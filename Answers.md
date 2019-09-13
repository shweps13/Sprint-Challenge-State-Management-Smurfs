- [ ] What problem does the context API help solve?
  ==> Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  ==> [actions] - it's a place with information for Redux with type of actions. [reducers] - place where we showing to Redux what we should returning on any actions. [store] - it's kind keeper of statements, usually we connecting whole app to store. Store: The store sets up the state in Redux. It contains all the information within the application that can change.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?
  ==> Application state is immutable. In case of changing will be created copy state object, change it and replace. In component state is stores across components. Application state will be better in case of big application.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  ==> Redux thunk is a middleware for Redux that provides the ability to handle asynchronous operations through action creators. When an action creator is called, redux-thunk will intercept and look at what is returned.

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why! 
  ==> Redux! Because it's a lot of opportunities in big applications not to loose states between components props especially in async time.