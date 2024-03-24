<template>
  <main class="AppMain d-flex">
    <div class="sidebar">
      <div>
        <h3>Join a chat</h3>
        <label for="username">username</label>
        <input type="text" placeholder="username" name="username" />
        <label for="room-id">room ID</label>
        <input type="text" placeholder="room id" name="room-id" />
      </div>
    </div>

    <div class="app-core d-flex flex-column">
      <div class="display-chat flex-grow-1">
        <p>aaaaaa</p>
      </div>
      <div class="input-chat">
        <form action="" method="POST" class="d-flex gap-5">
          <input type="text" name="text-chat" class="input-text" />
          <input
            type="submit"
            class="btn btn-success send-btn"
            contenteditable="true"
          />
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

      .input-text {
        width: 400px;
        max-width: 400px;
        border-radius: 20px;
        border: transparent;
        box-shadow: 0px 0px 5px black;
        padding-left: 10px;
      }

      .send-btn {
        box-shadow: 0px 0px 5px black;
      }
    }
  }
}
</style>
