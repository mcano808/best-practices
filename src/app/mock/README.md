# Mock Data
Having a common location for mock data allows tests to be written faster and updated in a single location when models change (which they always do).

The simplest version of this is static data files with JSON objects representing you data's interface.  
* Try to make the data as real as possible.  This allows for better testing and sampling as you go along.
* This mock data can be used as fake returns from services until the actual services are available.  This way the front end and back end can agree to a data shape - mock it- then work in unison vs having to wait for one to finish before the other can begin.
* Use methods to return the data that clone it.  This way you aren't accidentally mutating data between tests!
Mock data generator functions
