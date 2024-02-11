import express from 'express';
import SSLCommerzPayment from 'sslcommerz-lts';

const app = express();

const store_id = process.env.SSLCOMMERZ_STORE_ID
const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD
const is_live = false //true for live, false for sandbox