# QUESTIONS

**1. What would you add to your solution if you had more time?**
*  Histogram for the orderbook
*  Tidy up the code (breaking it up into smaller components; cleaning up the services and models)
*  The code is slightly ready to accept other products so I would take that up.
*  Tests (unit, integration and e2e)
*  Formatting the data (monetary formatters)
*  Improve styling and potentially offer themeing
*  Consider using a store like Redux (ngrx) or something simpler as to not clog the UI
*  Improve the error notifications (especially the styling and behavior)

**2. What would you have done differently if you knew this page was going to get thousands of views per second vs per week?**
If per second, I would do some performance analysis and try to improve how the data is being processed. Data processing is the most expensive part of this application as most of the logic lies there. I would try to improve the algorithm further.
If per week, I would still do some performance analysis but not be as strict as if per second.

**3. What was the most useful feature that was added to the latest version of your chosen language?**
I am using Angular 11. I haven't used any of their updated features speifically. For example I would like to  switch to ESLint which they now better support, but Angular CLI still comes with TSLint by default. There were a lot of other updates such as faster Hot Module Replacement (HMR) which is useful while coding. Another update was upgrading to TS 4.0, which comes with many new features that I could make use of as the application complexity grows.

**4. How would you track down a performance issue in production?**
I would look at the Chrome developer tools to see what is going on in prod or a similar environment as to not have further impact. I would look at the latest release to see if new code change is causing the issue. There are tools to log timings to servers to I would add these to the UI code and analyze those logs.

**5. Can you describe common security concerns to consider for a frontend developer?**
Authentication and authorization. Scripts and html modification. Network security.

**6. How would you improve the API you used?**
If the snapshot included totals that is one less thing for the UI to do. The updates come in very fast and sometimes with minimal change, so maybe the batching can be done less frequently (which means less live data so that is a tradeoff). Maybe a bit more help from the server to keep the max number of levels but that would be hard to do as it'd need to keep track more.