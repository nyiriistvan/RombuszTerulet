import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [side, setSide] = useState('');
  const [alpha, setAlpha] = useState('');
  const [perimeter, setPerimeter] = useState('');
  const [area, setArea] = useState('');

  const calculate = () => {
    const s = parseFloat(side);
    const a = parseFloat(alpha);
    if (s && a) {
      const rad = a * (Math.PI / 180);
      const p = 4 * s;
      const h = s * Math.sin(rad);
      const b = s * Math.cos(rad);
      const a = b * h;
      setPerimeter(p.toFixed(2));
      setArea(a.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Rombusz oldalának hossza:</Text>
      <TextInput
        style={styles.input}
        value={side}
        onChangeText={setSide}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Alfa szöge:</Text>
      <TextInput
        style={styles.input}
        value={alpha}
        onChangeText={setAlpha}
        keyboardType="numeric"
      />
      <Button title="Számol" onPress={calculate} />
      <Text style={styles.result}>
        Kerület: {perimeter} {"\n"}
        Terület: {area}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    fontSize: 18,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});
