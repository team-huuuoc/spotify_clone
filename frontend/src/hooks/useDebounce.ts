import React, {useEffect} from 'react';

const useDebounce = <T>(value: T, delay: 500 ) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        })
        return () => clearTimeout(timeout)
    }, [value, delay]);
};

export default useDebounce;
