<template>
  <section class="dos-section">
    <div class="dos-container">
      <h1 class="dos-title">The Date</h1>
      <p class="dos-subtitle">A text adventure: How I met my girlfriend Hannah and our first date</p>
      <div v-if="step === 0">
        <p class="dos-text">You are Logan Cooper and you come across a familiar face on your phone. You see Hannah, a stunningly beautiful woman you went to high school with. You have the opportunity to reach out to her. What do you do?</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(1)">Reach out right away</button>
          <button class="dos-btn alt" @click="nextStep(2)">Wait and think of the perfect way to say hello</button>
        </div>
      </div>
      <div v-else-if="step === 1">
        <p class="dos-text">You reach out to her as soon as possible and you begin to correspond. The conversation flows easily. Do you...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(3)">Ask her about what she's been up to since high school</button>
          <button class="dos-btn alt" @click="nextStep(4)">Ask about her favorite things</button>
        </div>
      </div>
      <div v-else-if="step === 2">
        <p class="dos-text">You take a moment to gather your thoughts, then you reach out to her. She seems a bit surprised at first, but soon the conversation begins to flow. Do you...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(3)">Compliment her beautiful smile</button>
          <button class="dos-btn alt" @click="nextStep(4)">Ask about her day</button>
        </div>
      </div>
      <div v-else-if="step === 3">
        <p class="dos-text">She begins to talk passionately about her major. She tells you she's going to be a teacher and you feel the happiest you've ever been when listening to someone talk...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(5)">Ask her out on a date</button>
          <button class="dos-btn alt" @click="nextStep(5)">Definitely ask her out on a date!</button>
        </div>
      </div>
      <div v-else-if="step === 4">
        <p class="dos-text">She tells you about her day and you both talk for hours. Hannah shares her passions and interests. You find you have a lot in common. The conversation is going well, and you both decide to talk every day. Over time, you feel a special connection growing more and more.</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(5)">Ask her out on a date!</button>
        </div>
      </div>
      <!-- Blank steps for user to fill in -->
      <div v-else-if="step === 5">
        <p class="dos-text">You plan a date with Hannah! You decide to take her to one of your most favorite places and walk the trails there, then go on a drive together! What do you do next?</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(6)">Count down the days till the date</button>
          <button class="dos-btn alt" @click="nextStep(6)">Get really, really, really excited about the date and count down the days till the date!</button>
        </div>
      </div>
      <div v-else-if="step === 6">
        <p class="dos-text">It's the day of your date with Hannah and you feel nothing but excitement and anticipation. You go to pick her up and she steps out the door of her home and...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(7)">Admire her beauty and smile like you never have before</button>
          <button class="dos-btn alt" @click="nextStep(8)">Go slack-jawed because she is so gosh darn radiant</button>
        </div>
      </div>
      <div v-else-if="step === 7">
        <p class="dos-text">You smile like you've never smiled before and you go on the greatest date ever and you know she's the one you want to be with! Then you drop her off at her home and...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(10)">Make plans for another date ASAP!</button>
        </div>
      </div>
      <div v-else-if="step === 8">
        <p class="dos-text">You are absolutely amazed by her beauty and you get all flustered at first because you really want to make a great impression. Then you find that talking with her comes so naturally and it feels right, so you have a wonderful date and eventually drop her off at her home knowing you want to ask her out and...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(10)">Make plans for another date as soon as possible!</button>
        </div>
      </div>
      <div v-else-if="step === 10">
        <p class="dos-text">You make plans for another date with Hannah on Easter break. You come up with various ways to ask her out but you just want to be hers so bad you want to ask her out immediately! Some time goes by and Easter is nearly here and Hannah comes home from school. You go to pick her up and when you get there she gets into your car and kisses you immediately. The first kiss you two have is engrained in your memory and you look back on it over and over again. You then begin to head to your house with Hannah right by your side. You get home and kiss her again and...</p>
        <div class="dos-buttons">
          <button class="dos-btn" @click="nextStep(11)">Ask Hannah a very important question!</button>
        </div>
      </div>
      <div v-else-if="step === 11">
        <p class="dos-text">You look into her eyes and, with a nervous but hopeful smile, ask, "Will you go out with me?" She smiles and says yes! Your heart soars as you both laugh and celebrate the start of something special.</p>
        <div class="dos-success">You have started a beautiful relationship and you'll do anything to preserve and cherish it.</div>
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
