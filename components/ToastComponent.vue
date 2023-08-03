<template>
  <Transition name="fade">
    <div class="toast-component" :style="{boxShadow: `4px 2px 0px ${statusColor}`}" v-if="statusvisible">
      <div class="toast-component__container">
        <p :style="{ color: `${statusColor}` }">{{ status }}</p>

        <div>
          <svg
            width="32"
            height="25"
            viewBox="0 0 32 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <path
                id="Vector"
                d="M28.4007 0H2.7832V2.51783H28.4007V0Z"
                :style="{ fill: `${statusColor}` }"
              />
              <path
                id="Vector_2"
                d="M30.8637 7.97547C30.4531 7.24154 27.7774 3.67224 27.7774 3.67224H24.735C23.362 5.38851 19.8682 11.8693 23.5385 30.8528C24.258 34.5714 24.6186 43.2871 22.2981 47.5368H13.1485C16.2848 43.6022 20.4522 35.8892 19.217 26.7593C17.6416 15.1148 17.3858 7.98493 19.0068 3.67224H3.40638C3.40638 3.67224 0.7307 7.24144 0.320055 7.97547C-0.0928356 8.71018 0.0118521 9.02455 0.0118521 10.0744C0.0118521 11.1235 0.0118521 43.5495 0.0118521 44.913C0.0118521 46.2773 0.392419 48.0162 1.34857 48.4822C3.29242 49.4252 2.57201 51 4.64066 51H26.5432C28.6118 51 27.8914 49.4252 29.8352 48.4822C30.7913 48.0162 31.1719 46.2772 31.1719 44.913C31.1719 43.5496 31.1719 11.1235 31.1719 10.0744C31.1719 9.02455 31.2759 8.71028 30.8637 7.97547Z"
                :style="{ fill: `${statusColor}` }"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import useToastStore from "@/stores/ToastStore";
const toastStore = useToastStore();

const status = ref("");
const statusColor = ref("");
const statusvisible = ref(false);

console.log(toastStore.show);

watchEffect(() => {
  const { message, show, color } = useToastStore();
  (status.value = message),
    (statusColor.value = color),
    (statusvisible.value = show);
});
</script>

<style lang="scss" scoped>
.toast-component {
  position: fixed;
  top: 6rem;
  z-index: 30;
  left: 2rem;
  border-radius: 5px;
  width: max-content;
  padding: 0.5rem 1rem;
  height: max-content;
  background: black;

  &__container {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    gap: 0.5rem;
    font-family: "grotesk";

    p {
      font-size: 1rem;
    }
    img {
      width: 1rem;
    }
  }
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
