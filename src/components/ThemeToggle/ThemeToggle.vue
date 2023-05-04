 <template>
  <article class="theme-toggle">
    <label class="theme-toggle__switch">
      <input type="checkbox" v-model="isDark" aria-label="Dark theme">
      <span class="slider round"></span>
    </label>
  </article>
</template>

<script lang="tsx" setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<style lang="scss" scoped>
.theme-toggle__switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
}

.theme-toggle__switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bays-1);
  box-shadow: none;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  &:hover,
  &:focus {
    background-color: var(--primary-color);
  }
  &:active {
    background-color: var(--bays-3);
    &::before {
      box-shadow: 0px 0px 0px 12px rgba(0, 98, 245, 0.2);
    }
  }
  &::before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: #ffffff;
    box-shadow: none;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  }
}

input:checked + .slider {
  background-color: var(--boulders-4);
}

input:checked + .slider:before {
  transform: translateX(28px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>