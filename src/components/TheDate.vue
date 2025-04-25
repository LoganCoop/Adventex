<template>
  <section class="dos-section">
    <div class="dos-container">
      <h1 class="dos-title">The Date</h1>
      <p class="dos-subtitle">A text adventure: How I met my girlfriend Hannah and our first date</p>
      <div v-if="step === 0">
        <p class="dos-text">You are Logan Cooper and you come across a familiar face in your phone. You see Hannah, a stunningly beautiful woman you went to High School with. You have the opportunity to reach out to her. What do you do?</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(1)">Reach out right away</button>
          <button class="dos-btn alt" @click="nextStep(2)">Wait and think of the perfect way to say hello</button>
        </div>
      </div>
      <div v-else-if="step === 1">
        <p class="dos-text">You reach out to her as soon as possible and you begin to correspond. The conversation flows easily. Do you...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(3)">Ask her about what she's been up to since High School</button>
          <button class="dos-btn alt" @click="nextStep(4)">Ask about her favorite things</button>
        </div>
      </div>
      <div v-else-if="step === 2">
        <p class="dos-text">You take a moment to gather your thoughts, then you reach out to her. She seems a bit surprised at first, but soon the conversation begins to flow. Do you...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(3)">Compliment her smile</button>
          <button class="dos-btn alt" @click="nextStep(4)">Ask about her day</button>
        </div>
      </div>
      <div v-else-if="step === 3">
        <p class="dos-text">She begins to talk passionately about her major. She tells you she's going to be a teacher and...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(5)">Ask her to be your girlfriend</button>
        </div>
      </div>
      <div v-else-if="step === 4">
        <p class="dos-text">She lights up, sharing her passions and interests. You find you have a lot in common. The date is going well, and you both decide to get dessert. Over dessert, you feel a special connection.</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(5)">Ask her to be your girlfriend</button>
        </div>
      </div>
      <div v-else-if="step === 5">
        <p class="dos-text">You look into her eyes and, with a nervous but hopeful smile, ask, "Would you like to be my girlfriend?" She blushes and says yes! Your heart soars as you both laugh and celebrate the start of something special.</p>
        <div class="dos-success">Congratulations! You have started a beautiful relationship.</div>
        <router-link to="/" class="dos-btn mt-5">Back to Home</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const step = ref(0)
function nextStep(n) {
  step.value = n
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&display=swap');

.dos-section {
  background: #222;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.dos-container {
  background: #111;
  border: 3px double #33ff33;
  border-radius: 8px;
  padding: 2rem 2.5rem;
  max-width: 600px;
  width: 100%;
  color: #33ff33;
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
  box-shadow: 0 0 24px #000a;
}
.dos-title {
  font-size: 2rem;
  color: #33ff33;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 4px #33ff33, 0 0 8px #222;
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
}
.dos-subtitle {
  font-size: 1.1rem;
  color: #baffba;
  margin-bottom: 2rem;
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
}
.dos-text {
  color: #33ff33;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  white-space: pre-line;
}
.dos-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.dos-btn {
  background: #111;
  color: #33ff33;
  border: 2px solid #33ff33;
  border-radius: 0;
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  text-align: left;
  box-shadow: 0 0 8px #33ff3355;
}
.dos-btn:hover {
  background: #33ff33;
  color: #111;
}
.dos-btn.alt {
  border-color: #baffba;
  color: #baffba;
}
.dos-btn.alt:hover {
  background: #baffba;
  color: #111;
}
.dos-success {
  background: #111;
  color: #baffba;
  border: 2px dashed #33ff33;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 1.1rem;
  text-align: center;
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
}
.mt-5 {
  margin-top: 2rem;
}
</style>
