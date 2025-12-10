<script setup lang="ts">
import { ref } from 'vue';

// const messageInput = useTemplateRef('message-input-2')
const text = ref('')
// const chatWindow = useTemplateRef('chat-window-2')

const messages = ref<string[]>([])

function sendMessage() {
    messages.value.push(text.value)
    text.value = ''
}


/*
function sendMessage() {
    const text = messageInput.value?.value.trim();

    if (text?.length) {
        const messageBubble = document.createElement('div');
        messageBubble.className = 'message-bubble';
        messageBubble.textContent = text;
        
        
        chatWindow.value?.appendChild(messageBubble);

        if(messageInput.value) {
            messageInput.value.value = '';
        }
    }
}
*/
/*
onMounted(() => {
    if (messageInput.value) {
        messageInput.value.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    }

})
    */

</script>

<template>
    <div class="flex h-full">
        <div class="flex flex-col bg-[#e9eef6] justify-between w-70  p-4">
            <div class="flex flex-col gap-6">
                <div class="flex justify-between align-center">
                    <img src="@/assets/trait.png" class="w-4" alt="" />
                    <img src="@/assets/recherche.png" class="w-4" alt="" />
                </div>
                <div class="flex flex-col gap-5 p-3 font-medium  ">
                    <p>Nouvelle discussion</p>
                    <p>Mes contenues</p>
                    <p>Gems</p>
                    <p>Discussions</p>
                </div>
                <div ref="chat-window-2" class="flex flex-col gap-2 p-3">
                    <div v-for="message in messages" class="message-bubble">{{ message }}</div>
                </div>
            </div>

            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                    <img src="@/assets/66.png" class="h-4" alt="" />
                    <p>Activité</p>
                </div>
                <div class="flex items-center gap-2">
                    <img src="@/assets/parametre.png" class="h-4" alt="''" />
                    <p>Paramètre et aide</p>
                </div>
                <ul class="ml-1 list-disc list-inside">
                    <li class="text-sm">
                        <span class="text-blue-600 font-medium">Argenteuil, France</span>
                        <br>
                        <span class="ml-5">D'après votre adresse IP</span>
                        <br>
                        <span class="ml-5 text-blue-600 font-medium">Mettre à jour la position</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col flex-1 bg-[#f0f4f8]">
            <div class="flex justify-between p-2">
                <p class="font-bold text-lg pt-2 ">Gemini</p>
                <img src="@/assets/google.png" alt="" />
            </div>
            <div class="flex flex-col justify-center items-center flex-1">
                <div>
                    <div class="flex gap-1">
                        <img src="@/assets/img_gemini.jpg" class="h-5 mb-2" alt="" />
                        <div>
                            <p class="text-2xl">Bonjour Rayan</p>
                            <p class="text-4xl">Par où commencer ?</p>
                        </div>
                    </div>
                    <div class="flex flex-col  bg-white rounded-4xl p-5 border-1 border-gray-200 gap-5 m-4 w-3xl">



                        <input ref="message-input-2" v-model="text" class="w-full h-10 border-none focus:outline-none "
                            placeholder="Demandez à Gemini" @keyup.enter="sendMessage">


                        <div class="flex justify-between gap-2">
                            <div class="flex gap-2">
                                <img src="@/assets/plus.png" class="h-4 w-4" alt="" />
                                <img src="@/assets/outils.png" class="h-6 w-6" alt="" />
                                <p class="text-black-800 font-bold text-sm">Outils</p>
                            </div>
                            <div class="flex gap-2">
                                <p class="text-black-800 font-bold text-sm">Rapide</p>
                                <img src="@/assets/micro.png" class="h-4 w-4" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-self-center p-4 ">
                        <button
                            class="flex bg-white rounded-3xl p-4 font-bold border-1 border-gray-200 mr-3 hover:bg-gray-300">Rédiger</button>
                        <button
                            class="flex bg-white rounded-3xl p-4 font-bold border-1 border-gray-200 hover:bg-gray-300">Dévolopper
                            une idée</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>