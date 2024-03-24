<template>
  <main class="AppMain d-flex">
    <div class="sidebar">side</div>

    <div class="app-core d-flex flex-column">
      <div class="display-chat flex-grow-1">
        <p>aaaaaa</p>
      </div>
      <div class="input-chat">
        <form action="" method="POST">
          <input type="text" />
          <input type="submit" value="invia" />
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.AppMain {
  flex-grow: 1;

  .sidebar {
    width: 220px;
    background-color: lightblue;
  }

  .app-core {
    width: 100%;

    .display-chat {
      width: 100%;
    }

    .input-chat {
      height: 150px;
      background-color: #1b90ff;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
