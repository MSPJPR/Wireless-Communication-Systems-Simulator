// Initialize default values
const frequencySlider = document.getElementById('frequency');
const frequencyValue = document.getElementById('frequencyValue');
const bandwidthSlider = document.getElementById('bandwidth');
const bandwidthValue = document.getElementById('bandwidthValue');
const snrSlider = document.getElementById('snr');
const snrValue = document.getElementById('snrValue');

// Update display values when sliders are adjusted
frequencySlider.oninput = function() {
    frequencyValue.textContent = frequencySlider.value;
};

bandwidthSlider.oninput = function() {
    bandwidthValue.textContent = bandwidthSlider.value;
};

snrSlider.oninput = function() {
    snrValue.textContent = snrSlider.value;
};

// Simulate wireless channel
function simulateChannel() {
    const frequency = frequencySlider.value;
    const bandwidth = bandwidthSlider.value;
    const snr = snrSlider.value;

    let output = `
        <p>Simulating Wireless Channel...</p>
        <p>Frequency: ${frequency} GHz</p>
        <p>Bandwidth: ${bandwidth} MHz</p>
        <p>Signal-to-Noise Ratio: ${snr} dB</p>
    `;

    // Add channel model and fading details
    output += `
        <p>Channel Model: Rayleigh Fading</p>
        <p>Time and Frequency Coherence: ${Math.random().toFixed(2)}</p>
        <p>Impact of Channel Uncertainty: ${Math.random().toFixed(2)}</p>
    `;

    document.getElementById('output').innerHTML = output;
}

// Simulate MIMO
function simulateMIMO() {
    const frequency = frequencySlider.value;
    const bandwidth = bandwidthSlider.value;
    const snr = snrSlider.value;

    let mimoOutput = `
        <p>Simulating MIMO Communication...</p>
        <p>Frequency: ${frequency} GHz</p>
        <p>Bandwidth: ${bandwidth} MHz</p>
        <p>Signal-to-Noise Ratio: ${snr} dB</p>
    `;

    // Add MIMO diversity and multiplexing information
    mimoOutput += `
        <p>MIMO Technology: Space-Time-Frequency Diversity</p>
        <p>Uplink with Multiple Receive Antennas</p>
        <p>Downlink with Multiple Transmit Antennas</p>
    `;

    document.getElementById('output').innerHTML = mimoOutput;
}
