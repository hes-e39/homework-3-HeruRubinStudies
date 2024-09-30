import type React from 'react';
import { useEffect, useState } from 'react';
import styles from './ColorGrid.module.css';

// interfaces
interface ComplementaryColor {
    hex: string;
    name: string;
}

interface Color {
    hex: string;
    name: string;
    comp: ComplementaryColor[];
}

const ColorGrid: React.FC = () => {
    const [colors, setColors] = useState<Color[]>([]);

    useEffect(() => {
        fetch('/colors.json')
            .then((response) => response.json())
            .then((data: Color[]) => {
                setColors(data);
            })
            .catch((error) => {
                console.error('Error fetching colors:', error);
            });
    }, []);

    return (
        <div className={styles.grid}>
            {colors.map((color) => (
                <div
                    key={color.hex}
                    className={styles.gridItem}
                    style={{ backgroundColor: `#${color.hex}` }}
                >
                    <span className={styles.colorName}>{color.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ColorGrid;
