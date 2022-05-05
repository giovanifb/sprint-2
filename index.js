class register extends Component {
	render() {
		return (
			<div className="componentSignUp">
				{/* Criação do Container de Logo do Aplicativo */}
				<div className="containerLogoSignUp">
					<img src={Logo} className='logoSignUp'/>
				</div>

				<div className="container-cadastrar">
					<form className="formSignUp">
						<label for="inputUsuario">Usuario:</label>
						<input type="text" id="inputUsuario" autocomplete="off"/>
	
						<label for="inputSenha">Senha:</label>
						<input type="password" id="inputSenha" autocomplete="off"/>
	
						<div class="container-btn-register">
							<Link to='/' className="botaoSignUp primarioSignUp linkSignUp">
								Cadastrar
							</Link>
	
							<Link to='/' className="botaoSignUp quartenarioSignUp linkSignUp">
								Cancelar
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
    
}