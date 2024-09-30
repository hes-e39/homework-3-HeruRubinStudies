import type React from 'react';
import styles from './ColorGrid.module.css';
import colorData from './colors.json';

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
    const colors: Color[] = colorData;
    //using file directly since Github pages doesn't allow fetch from inside
    //won't make a difference for now since we have a graceful fail state - no render of grid is all
    return (
        <div className={styles.grid}>
            {/*iterate over the colors json file*/}
            {colors.map(color => (
                // generate a color display rectangle
                <div key={color.hex} className={styles.gridItem} style={{ backgroundColor: `#${color.hex}` }}>
                    <span className={styles.colorName}>{color.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ColorGrid;
