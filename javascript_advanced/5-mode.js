function changeMode(size, weight, transform, background, color) {
    return () => {
      const styles = document.body.style;
      styles.fontSize = `${size}px`;
      styles.fontWeight = weight;
      styles.textTransform = transform;
      styles.backgroundColor = background;
      styles.color = color;
    };
  }
  
  function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);
    const spookyBtn = document.createElement('button');
    spookyBtn.textContent = 'Spooky';
    spookyBtn.onclick = spooky;
    document.body.appendChild(spookyBtn);
  
    const darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = 'Dark mode';
    darkModeBtn.onclick = darkMode;
    document.body.appendChild(darkModeBtn);
  
    const screamModeBtn = document.createElement('button');
    screamModeBtn.textContent = 'Scream mode';
    screamModeBtn.onclick = screamMode;
    document.body.appendChild(screamModeBtn);
  }
  
  main();
  