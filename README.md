Node PFS Demo
=============

A demo function for Pivotal Function Service.

## To deploy:

```
pfs function create randomwords --git-repo https://github.com/neilshannon/node-pfs-demo --image $REGISTRY/$REGISTRY_USER/randomwords --artifact index.js  --verbose
```

## To invoke:

```
pfs service invoke randomwords --text -- -w '\n' -d 'Your text here'
```

## Docs:
https://bit.ly/2QVsyxg