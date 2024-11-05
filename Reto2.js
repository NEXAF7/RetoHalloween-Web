function battleHorde(zombies, humans) {
    let zTotal = 0;
    let hTotal = 0;

    for (let i = 0; i < zombies.length; i++) {
        const zPower = parseInt(zombies[i], 10) + zTotal;
        const hPower = parseInt(humans[i], 10) + hTotal;

        if (zPower > hPower) {
            zTotal = zPower - hPower;
            hTotal = 0;
        } else if (hPower > zPower) {
            hTotal = hPower - zPower;
            zTotal = 0;
        } else {
            zTotal = 0;
            hTotal = 0;
        }
    }

    return zTotal > hTotal ? `${zTotal}z` : hTotal > zTotal ? `${hTotal}h` : 'x';
}
