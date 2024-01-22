const loadText = () => {
    var para = {
        'Enigmatic Enigma' : "The enigmatic enigma perplexed the seasoned detectives. As they delved into the intricacies of the case, the elusive clues seemed to dance just out of reach. The detective, with furrowed brows, sifted through the perplexing puzzle of contradictory testimonies. Shadows in the moonlit alley whispered secrets, adding layers to the enigma. Each revelation deepened the mystery, casting doubt on what was thought to be certain. The enigma proved to be a labyrinth of deceit, where truth and illusion intertwined, creating a narrative more complex than anyone had imagined. The investigators, caught in the enigma's web, yearned for the clarity that continued to elude them.",
        'Whimsical Wonderland' : "The whimsical wonderland unfolded before their eyes as they ventured through the mystical forest. Trees, adorned with vibrant colors, whispered ancient tales to those who listened. A symphony of laughter echoed from unseen creatures, adding an air of enchantment to the already magical atmosphere. The path, winding through the wonderland, beckoned with promises of discovery. Hidden nooks revealed secrets, and whimsical creatures peeked from behind emerald leaves. The air, filled with the scent of adventure, carried the promise of extraordinary encounters. In this whimsical wonderland, reality and fantasy danced in a harmonious ballet, blurring the lines between the ordinary and the extraordinary.",
        'Luminous Labyrinth' : "Within the luminous labyrinth of the futuristic city, neon lights painted a kaleidoscope on the bustling streets. Skyscrapers reached for the heavens, their reflective surfaces capturing the vibrant energy that pulsed through the metropolis. The labyrinthine network of streets and alleys was a tapestry woven with the stories of diverse lives. A symphony of honks, footsteps, and conversations filled the air, creating a dynamic melody that encapsulated the city's heartbeat. The luminous glow emanating from digital billboards added an otherworldly aura to the labyrinth. As day seamlessly transitioned into night, the labyrinth revealed different facets of its personality, making it a captivating and ever-evolving urban landscape."
    }
    var num = Math.floor(Math.random() * 3);
    var text = "";
    if(num == 0) text = para['Enigmatic Enigma'];
    else if(num == 1) text = para['Luminous Labyrinth'];
    else text = para['Whimsical Wonderland'];

    document.getElementById('textgenerate').innerText = text;
};
export default loadText;