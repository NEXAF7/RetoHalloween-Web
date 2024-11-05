function findTheKiller(whisper, suspects) {
    const map = new Map();
    const pattern = new RegExp('^' + whisper.toLowerCase().replace(/~/g, '.') + (whisper.endsWith('$') ? '$' : ''), 'i');
    
    suspects.forEach((name, index) => {
      if (pattern.test(name.toLowerCase())) {
        map.set(index, name);
      }
    });
  
    const matches = Array.from(map.values());
    
    if (matches.length === 1) return matches[0];
    if (matches.length > 1) return matches.join(',');
    return '';
  }
  