<template>
  <h1 class="center-text"> Billets: </h1>
  <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Parcel</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="ticket in tickets" :key="ticket.id">
      <td>{{ ticket.name }}</td>
      <td>{{ ticket.description }}</td>
      <td>{{ ticket.price }}</td>
      <td> <single-spa-link></single-spa-link>  </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';
import * as singleSpa from 'single-spa';
import { registerApp as reactApp } from '../../../buyButton/src/root.component';

singleSpa.registerApplication('react-app', reactApp, location => location.pathname === '/react');
export default {
  name: 'TicketDisplay',
  data() {
    return {
      tickets: []
    }
  },
  mounted() {
    axios.get('http://localhost:3000/api/all-products')
        .then(response => {
          this.tickets = response.data
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style>
table {
  margin: 0 auto; /* center the table horizontally */
  border-collapse: collapse;
  width: 90%; /* increase the width of the table to 100% of the container */
  font-size: 1.2em; /* increase the font size of the text inside the table */
}

th, td {
  border: 1px solid gray; /* add a border around each cell */
  padding: 10px; /* increase the padding inside the cells */
}
th {
  background-color: green; /* change the background color of the table head to green */
  color: white; /* change the text color to white */
}
tr:nth-child(even) td {
  background-color: lightgray; /* change the background color of even rows to light gray */
}

.center-text{
  text-align: center;
}


</style>