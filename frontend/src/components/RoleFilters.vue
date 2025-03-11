<template>
    <div class="role-filters">
      <button 
        v-for="role in roles" 
        :key="role" 
        @click="selectRole(role)" 
        :class="{ active: selectedRole === role }"
      >
        {{ role }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['selectedRole'],
    data() {
      return {
        roles: ['Tous', 'Tank', 'Mage', 'Assassin', 'Support', 'Tireur']
      };
    },
    methods: {
      selectRole(role) {
        this.$emit('update-role', role === 'Tous' ? '' : role);
      }
    }
  };
  </script>
  
  <style scoped>
  .role-filters {
    margin: 20px 0;
  }
  
  button {
    margin: 5px;
    padding: 10px;
    border: none;
    background: #444;
    color: white;
    cursor: pointer;
  }
  
  button.active {
    background: #007bff;
  }
  </style>
  