export function Chat_test() {
    return (
        <div>
          <div>
            <select name="select_room" id="select_room">
              <option value="-1">selecione a sala</option>
              <option value="node">node</option>
              <option value="java">java</option>
              <option value="react">react</option>
              <option value="elixir">elixir</option>
            </select>
          </div>
          <div>
            <label> Digite seu usuario</label>
            <input type="text" />
          </div>
          <div>
            <button>Entrar</button>
          </div>
          

        </div>
    )
}