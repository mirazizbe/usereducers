const ColorSwitcher = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ backgroundColor: `rgb(${state.red},${state.green},${state.blue})`, height: '100vh' }}>
            <ColorControl color="red" dispatch={dispatch} />
            <ColorControl color="green" dispatch={dispatch} />
            <ColorControl color="blue" dispatch={dispatch} />
        </div>
    );
};

export default ColorSwitcher;
