import React from 'react';
import {useState} from 'react';
import {url} from './Apimaster';

export let handle = ({type, id, setData, setIsloading, body}) => {
  let data = {username: 'example'};

  let option = {
    method: id ? 'delete' : type,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? body : JSON.stringify(data),
  };

  fetch(id ? `${url}/${id}` : url, option);
  setIsloading(true)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => error);
  setIsloading(false);
};

export let getData = ({setData}) =>
  fetch(url)
    .then(response => response.json())
    .then(data => setData(data));
