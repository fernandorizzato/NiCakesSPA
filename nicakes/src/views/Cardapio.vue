<template>
<v-container class="pink lighten-4">
<h2>Cardápio</h2>
<v-simple-table class="pink lighten-3">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Bolos e tortas
          </th>
          <th class="text-center">
            R$/Kg
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</v-container>
</template>

<script>
export default {
  name: "Cardapio",

      data () {
      return {
        desserts: [
          {
            name: 'Bolo Abacaxi c/ Coco',
            calories: 63,
          },
          {
            name: 'Bolo Crocantella',
            calories: 74,
          },
          {
            name: 'Bolo Folhado doce de leite / Mil Folhas',
            calories: 63,
          },
          {
            name: 'Bolo Light (Morango e Maracujá) ',
            calories: 74,
          },
          {
            name: 'Bolo Kit Kat M&M’S',
            calories: 98,
          },
          {
            name: 'Bolo Prestígio',
            calories: 63,
          },
          {
            name: 'Bolo Saint Honoré',
            calories: 74,
          },
          {
            name: 'Tortas Banoffee ou Chocolate com Chantilly',
            calories: 98,
          },
          {
            name: 'Cheesecake Framboesa',
            calories: 112,
          },
          {
            name: 'Torta Holandesa',
            calories: 146,
          },
        ],
      }
    },
};
</script>

<style scoped>
</style>
