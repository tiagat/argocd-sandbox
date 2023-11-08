const express = require("express");
const client = require("prom-client");

const app = express();
const port = 3000;

const register = new client.Registry();
const collectDefaultMetrics = client.collectDefaultMetrics;
const gauge = new client.Gauge({ name: "scaler_gauge", help: "metric_help" });

collectDefaultMetrics({ register });
register.registerMetric(gauge);
gauge.set(0);

app.get(["/", "/metrics"], async (req, res) => {
  if (req.query["scaler_gauge"]) {
    const value = parseInt(req.query["scaler_gauge"]);
    gauge.set(value);
  }

  res.setHeader("Content-Type", register.contentType);
  res.send(await register.metrics());
});

app.listen(port, () => {
  console.log(`Scaler app listening on port ${port}`);
});
