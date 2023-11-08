## Scaler Metrics Server

```
$ npm install
$ node index.js
```

**Get metric value**

```
$ curl http://localhost:3000/metrics

# HELP scaler_gauge metric_help
# TYPE scaler_gauge gauge
scaler_gauge 0
```

**Set metric value**

```
$ curl "http://localhost:3000/metrics?scaler_gauge=5"
```

Build Image

```
$ docker build -t tiagat/scaler:latest .
$ docker image push tiagat/scaler:latest
```
