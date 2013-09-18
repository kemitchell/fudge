

# Sweets
Next Web builder toolkit

## In-memory cache Sweets framework module with namespace support and no dependencies required.

### API

#### FudgeFactory

Factory which provides cache instance for defined namespace.

Methods: 

* getCache(ns) - cache instance provider
    * arguments
        * ns - namespace
    * returns Fudge class

#### Fudge

Cache itself

Methods:

* put(key, data, live) - puts key in cache
    * arguments
        * key - key
        * data - value
        * live - timestamp of stored data expiration
    * returns nothing

* get(key) - return value for specified key
    * arguments
        * key - key
    * returns data if it exists in cache and didn't expire, otherwise return false

* del(key) - deletes value for specified key
    * arguments
        * key - key
    * returns nothing

* clear() - cleares cache
    * method has no arguments and returns nothing