import { useState } from 'react';
import Draggable from 'react-draggable';
import s from './tagInput.module.css';

const TagsInput = ({ tagsArr }) => {
    const [tags, setTags] = useState(tagsArr);

    const handleKeyDown = (e) => {
        // console.log('eeeeee', e);
        // if user press Backspace key
        if (e.key === 'Backspace') {
            const clone = [...tags];
            clone.splice(-1, 1)
            setTags(clone)
        }
        // If user did not press enter key, return
        if (e.key !== 'Enter') return
        // Get the value of the input
        const value = e.target.value
        // If the value is empty, return
        if (!value.trim()) return
        // Add the value to the tags array
        setTags([...tags, value]);

        // Clear the input
        e.target.value = ''
    }

    const removeTag = (index) => {
        setTags(tags.filter((el, i) => i !== index))
    }

    const handleDragTag = (tag, currPos, newPos) => {
        const tags = [...tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags({ tags: newTags });
    }

    return (
        <div className={s.tagsInputContainer}>
            {tags.map((tag, index) => (
                <div onDrag={handleDragTag} className={s.tagItem} key={index}>
                    <span className="text">{tag}</span>
                    <span className={s.close} onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}
            <input type="text" onKeyDown={handleKeyDown} className={s.tagsInput} placeholder="Type keywords and press Enter" />
        </div>
    )
}

export default TagsInput