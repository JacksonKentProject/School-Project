const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)

        }
    })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'The year is 1573. Rival daimyos have plunged the nation into civil war. Through divine providence you are able to select your place in society.  Would you rather be: ',
        options: [
            {
                text: 'Peasant rice farmer',
                setState: {blueGoo: true},
                nextText: 2
            },
            {
                text: 'Mamásan (Woman who ran a brothel in the capital)',
                nextText: 15
            },
            {
                text: 'Fuedal Lord (Noble Samurai)',
                nextText: 30
            },
            {
                text: 'Porteguese Missionary',
                nextText: 45
            }
        ]
    },
    {
        id: 2,
        text: 'The ache in your back wakes you from your slumber as usual. You rouse your son and together you exit the house. You have a busy day ahead of you, you decide to start off by:',
        options: [
            {
                text: 'Repairing the plow',
                requiredState: (currentState) => currentState.blueGoo,
                setState: {blueGoo: false, sword: true},
                nextText: 4
            },
            {
                text: 'Picking rice',
                requiredState: (currentState) => currentState.blueGoo,
                setState: {blueGoo: false, shield: true},
                nextText: 11
            },
            {
                text: 'Finding firewood',
                nextText: 11
            },
            {
                text: 'Going back to sleep because work is lame and food is optional',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Your laziness is rewarded with starvation. Reconsider your priorities next time',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 4,
        text: "You and your son set about repairing the plow. It's meticulous work and takes a long time. By the time you are finished it is nearly midday",
        options: [
            {
                text: 'Return to the house for food',
                nextText: 5
            },
            {
                text: 'Begin picking rice',
                nextText: 6
            },
            {
                text: 'Venture into the woods in search of firewood',
                nextText: 7
            }
        ]
    },
    {
        id: 5,
        text: "As you sit eating with your family your hear the sound of horses on the road. You step outside and see a group of four samurai on the road approaching your house, you don't recognize their banners. They stop in front of your house and inform you they are incredibly weary from travel and require food.",
        options: [
            {
                text: "You can have whatever is leftover from lunch, there should be enough for the four of you",
                nextText: 8
            },
            {
                text: "You may have this bag of rice we've been saving for winter",
                nextText: 9
            },
            {
                text: "Sorry, I don't have any food to share. I barely have enough as it is.",
                nextText: 10
            }
        ]
    },
    {
        id: 8,
        text: "The samurai in the back speaks up. 'Are you sure that's all you have? We are incredibly hungry and haven't eaten for days'. They do appear gaunt and desperate, you get the feeling they may be deserters",
        options: [
            {
               text: "Reconsider and give them your entire bag of rice.",
               nextText: 11
            },
            {
               text: "I'm sorry lord, we're but lowly farmers and this is all we have to offer",
               nextText: 12
            }
        ]
    },
    {
        id: 9,
        text: "The samurai's take your rice and thank you for your generosity. As a token of their appreciation they take your son on as a servant (squire-lite).",
        options: [
            {
                text: "Despite your son's rise in station, your family now has no food saved for winter. You all starve to death later that year",
                nextText: 900
            },
            {
                text: 'If you would like to restart your journey, please click here',
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: "'As I expected'. The lead samurai takes the bag and with lightning speed draws his sword and slashes at your son. Your son falls to the ground clutching his face, blood seeping through his fingers. 'Let that scar be a reminder the next time you dare to lie to someone above your station",
        options: [
            {
                text: 'Run to assist your son',
                nextText: 13
            },
            {
                text: "Attempt to fight the samurai",
                nextText: 14
            }
        ]
    },
    {
        id: 12,
    },
    {
        id: 13,
        text: "The samurai's stare is unwavering as you huddle over your injured child. After a long pause they turn their horses and continue on down the road.",
        options: [
            {
                text: 'In the weeks that follow you try your best to heal your son, but infection sets in and soon he succumbs to his wound.',
                nextText: 900
            },
            {
                text: 'If you would like to restart your journey, please click here',
                nextText: -1
            }
        ]
    },
    {
        id: 14,
        text: "Despite being at a severe numerical disadvantage, compounded by the fact you have no training or eqipment, you attempt to attack the band of rogue samurai. Effortlessly, the samurai who struck your son dispatches your head from your shoulders as you charge towards him. Before they leave they make sure to execute your family and raze your house",
        options: [
            {
                text: 'Unfortunately, in fuedal japan it was often illegal for farmers to possess weapons or any type of training.  So they were completely at the mercy of any samurai.',
                nextText: 900
            },
            {
                text: 'If you would like to restart your journey, please click here',
                nextText: -1
            }

        ]
    },








    {
        id: 900,
        text: 'stand in text for whatever will be representing death in Fuedal Japan'
    }
    
    
]
startGame()