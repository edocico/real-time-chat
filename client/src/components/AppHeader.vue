<template>
  <header class="header">
    <div class="container-fluid h-100">
      <div class="d-flex justify-content-between align-items-center h-100">
        <div class="col-4">head1</div>
        <div class="col-4 text-center">
          <h1 class="title">{{ title }}</h1>
        </div>
        <div class="col-4 d-flex justify-content-between">
          <div class="badge text-bg-warning d-flex align-items-center">
            <p>connection state: {{ connected }}</p>
          </div>
          <div class="d-flex gap-3">
            <button @click="connect()" class="btn btn-success">connect</button>
            <button @click="disconnect()" class="btn btn-danger">
              disconnect
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { state } from "../socket";
import { socket } from "../socket";

export default {
  data() {
    return {
      title: "Real Time Chat",
    };
  },
  computed: {
    connected() {
      return state.connected;
    },
  },
  methods: {
    connect() {
      socket.connect();
    },
    disconnect() {
      socket.disconnect();
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  background-color: #1b90ff;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;

  .title {
    text-transform: uppercase;
    color: white;
  }
}
</style>
