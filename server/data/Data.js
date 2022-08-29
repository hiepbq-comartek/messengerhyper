import React from 'react';
import {useState, useEffect} from 'react';
import {getData} from './serverrender';

const [data, setData] = useState([]);
const [iduser, seiduser] = useState('');
