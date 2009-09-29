T.noContent = '<small class="noContent" style="color: #ccc; font-size:11px;">Sem conteúdo disponível</small>';
	
	T.PessoasDestaqueHome =
	{
		listItem:
		{
			content: 
				'<li class="${Plano}">'+
				'<img src="${FotoUrl}" alt="${Apelido}" />'+
				'<p>"${Frase}"</p>' +
				'<strong>${Apelido}</strong> <span>${Cidade} - ${Sigla}</span> </li>'
		},
		
		listWrapper: '<ul class="listWrapper bgPlans"></ul>'
	};
	
	T.Institucional =
	{
		content: '${Descricao}'
	};
	
	T.Regulamento =
	{
		content: '<div class="regulation"><h6>${Titulo}</h6>${Descricao}</div>'
	}
	
	T.plugins =
	{
		Rate:
		{
			content: '<span class="rating relevance" >' +
				'<input value="1" name="rating_${Id}" type="radio" class="star" ${Disabled} ${Checked_1}/>' +
				'<input value="2" name="rating_${Id}" type="radio" class="star" ${Disabled} ${Checked_2}/>' +
				'<input value="3" name="rating_${Id}" type="radio" class="star" ${Disabled} ${Checked_3}/>' +
				'<input value="4" name="rating_${Id}" type="radio" class="star" ${Disabled} ${Checked_4}/>' +
				'<input value="5" name="rating_${Id}" type="radio" class="star" ${Disabled} ${Checked_5}/>' +
				'<div class="ratingTotal">(<span class="ratingCount">${RatingCount}</span>)</div></span>',
				
			params: { Disabled: true }
		},
	
		CommentCount:
		{
			content: '<span class="comments"><a href="${ContentLink}#comments" title="${Count}">(${Count})</a></span>'
		},
	
		Tag:
		{
			content: '<span>${Tags}</span>'
		},
	
		Vocabulario:
		{
			content: '<span>${Vocabularios}</span>'
		},
	
		Plugin:
		{
			content: 'Template de Plugin'
		}
	};
	
	T.Banners =
	{
		listItem:
		{
			Flash: '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="${Largura}" height="${Altura}" align="middle">' +
				'<param name="movie" value="${Arquivo}" /><param name="wmode" value="transparent" /><param name="FlashVars" value="clickurl=${Link}"/><param name="quality" value="high" /><embed src="${Arquivo}" wmode="transparent" flashvars="clickurl=${Link}" quality="high" bgcolor="#ffffff" width="${Largura}" height="${Altura}" align="middle" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />' +
				'</object>',
			
			Imagem: '<a href="${Link}" ${Target} title="${Titulo}" alt="${Titulo}" ><img src="${ThumbUrl}?imagem=${Arquivo}&w=${Largura}&h=${Altura}" height="${Altura}" width="${Largura}"/></a>'
		},
	
		listWrapper: '<span class="listWrapper"></span>',
		noContent: ''
	};
	
	T.Planos =
	{
		Bronze:
		{
			content: '' +
				'<div class="information">'+
				'    <p>${Resumo}</p>'+
				'</div>'+
				'<div class="scoring">'+
				'	 <p>Ganhe já no cadastro:</p>' +
				'    <p class="points">${Pontos}</p><span>FLAs VERMELHOS</span>'+
				'</div>'+
				'<div class="price">'+
				'    <span class="total">${Total}</span>'+
				'    <span>${Parcelas}</span>' +
				'</div>'+
				'<a href="${Link}" class="bt_register pngfix" title="Participe agora!">Participe agora!</a>'+
				'<span class="bulletMore pngfix"></span><a href="plano-bronze" class="bt_seeMore" title="Quero saber mais">Quero saber mais</a>'
		},
		
		Prata:
		{
			content: '' +
				'<div class="information">' +
				'    <p>${Resumo}</p>' +
				'</div>' +
				'<div class="scoring">' +
				'	 <p>Ganhe já no cadastro:</p>' +
				'    <p class="points">${Pontos}</p><span>FLAs VERMELHOS</span>' +
				'</div>' +
				'<div class="price">' +
				'    <span class="total">${Total}</span>' +
				'    <span>${Parcelas}</span>' +
				'</div>' +
				'<a href="${Link}" class="bt_register pngfix" title="Participe agora!">Participe agora!</a>' +
				'<span class="bulletMore pngfix"></span><a href="plano-prata" class="bt_seeMore" title="Quero saber mais">Quero saber mais</a>'
		},
	
		Ouro: 
		{
			content: '' +
				'<div class="information">' +
				'    <p>${Resumo}</p>' +
				'</div>' +
				'<div class="scoring">' +
				'	 <p>Ganhe já no cadastro:</p>' +
				'    <p class="points">${Pontos}</p><span>FLAs VERMELHOS</span>' +
				'</div>' +
				'<div class="price">' +
				'    <span class="total">${Total}</span>' +
				'    <span>${Parcelas}</span>' +
				'</div>' +
				'<a href="${Link}" class="bt_register pngfix" title="Cadastre-se agora!">Cadastre-se agora!</a>' +
				'<span class="bulletMore pngfix"></span><a href="plano-ouro" class="bt_seeMore" title="Quero saber mais">Quero saber mais</a>'
		},
		
		Cadastro:
		{
			All:
			{
				content:
					'<div class="information">' +
					'    <p>${Resumo}</p>' +
					'</div>' +
					'<div class="scoring">' +
					'	 <p>Ganhe já no cadastro:</p>' +
					'    <p class="points">${Pontos}</p><span>FLAs VERMELHOS</span>' +
					'</div>' +
				   '<div class="price">' +
					'    <span class="total">${Total}</span>' +
					'    <span>${Parcelas}</span>' +
					'</div>' +
					''
			}
		},
		
		CadastroGrande:
		{
			All:
			{
				content: '' +
					'<div class="information">' +
					'    <p>${Resumo}</p>' +
					'</div>' +
					'<div class="scoring">' +
					'    <p class="points">${Pontos}<span> FV</span></p>' +
					'</div>' +
					'<div class="price">' +
					'    <span class="total">${Total}</span>' +
					'    <span>${Parcelas}</span>' +
					'</div>' +
					'<a href="${Link}" class="bt_register pngfix" title="Participe agora!">Participe agora!</a>' +
					'<span class="bulletMore pngfix"></span><a href="${LinkDetalhes}" class="bt_seeMore" title="Quero saber mais">Quero saber mais</a>' +
					''
			}
		}
	}
	
	T.Perfil =
	{
		infosUser:
		{
			content:
				'<div class="dataUser ${Plano}"><span class="bgTop"></span>' +
				'<div class="image"><img src="${FotoUrl}" alt="${Nome}" title="${Nome}" /><a class="imageUpload" href="#">Alterar Foto</a></div>' +
				'<p>CRN ${Carteirinha}</p><span class="${Plano}">${Tratamento} ${Plano}</span>' +
				'<div class="declarationUser">' +
				'	<p>O Flamengo pra mim é:</p>' +
				'	<p class="noMarginBottom">${Frase}</p>' +
				'</div>' +
				'<a href="plano" class="bt_changePerfil pngfix" title="Alterar meu Plano">Alterar meu plano</a>' +
				'<a href="#" class="bt_addFriend" title="Adicionar como amigo">Adicionar como amigo</a>' +
				'<a href="#" class="bt_removeFriend" title="Remover como amigo">Remover como amigo</a>' +
				'<a href="#" class="bt_sendMessage" title="Enviar Mensagem">Enviar Mensagem</a>' +
				'</div>'
		},
		
		modalSendConvite:
			'<div class="modal sendMessage">' +
			'   <h4>Convidar amigo</h4>' +
			'	<a href="#" class="bt_close" title="Fechar">Fechar</a>' +
			'	<form>' +
			'   	<label><b>Você deseja convidar ${Nome} para fazer parte de sua lista de amigos?</b></label>' +
			'   	<label for="message">Escreva uma mensagem que ajude a identificá-lo:</label>' +
			'		<strong class="caracter">140</strong>' +
			'		<textarea id="message" cols="69" rows="5" class="{required:true}" title="Preencha a mensagem antes de enviar"></textarea>' +
			'       <button type="submit" class="bt_send">Enviar</button>' +
			'		<button type="button" class="bt_cancel">Cancelar</button>' +
			'   </form>' +
			'</div>',
	
		links:
		{
			TextoLivre:
			{
				listItem: '<li class="${Codigo}" title="${Codigo}"><a href="${Resposta}" target="_blank" title="${Resposta}">${UrlResposta}</a></li>'
			}
		}
	};
	
	T.PerfilCompleto =
	{
		links:
		{
			TextoLivre: 
			{ 
				listItem:
					'<li class="${Codigo}" title="${Codigo}">' +
					'	<a href="${Resposta}" target="_blank" title="${Resposta}">${UrlResposta}</a>' +
					'	<input type="text" indice="${Index}" id="info_${Codigo}" name="info_${Codigo}" value="${Resposta}" />' +
					'</li>'
			}
		},
	   
		complementRegister:
		{
			TextoLivre: 
			{ 
				listItem: 
					'<li>' +
					'	<div><label for="info_${Codigo}">${Descricao}</label></div>' +
					'	<span>${RespostaRead}</span>' +
					'	<textarea cols="34" rows="1" indice="${Index}" id="info_${Codigo}" name="info_${Codigo}">${Resposta}</textarea>' +
					'	<strong class="caracter">140</strong>' +
					'</li>'
			},
			
			UmaResposta: 
			{
				listItem:
					'<li>' +
					'	<div><label for="info_${Codigo}">${Descricao}</label></div>' +
					'	<span>${RespostaRead}</span>' +
					'	${OptionWrapper}' +
					'</li>',
				optionWrapper: '<select name="info_${Codigo}" indice="${Index}" class="itemOptions"><option value="">Selecione...</option></select>',
				
				optionItem: '<option value="${Id}" ${Selected}>${Descricao}</option>'
			}
		},
		
		basicRegisterViewer:
			'<li class="yourName">'+
			'	<label>Nome:</label>'+
			'	<span>${Nome}</span>'+
			'</li>'+
			'<li class="age">'+
			' 	<label>Idade:</label>'+
			'	<span>${Idade} Anos</span>'+
			'</li>'+
			'<li class="clubForMe">'+
			' 	<label>O Flamengo pra mim é:</label>'+
			'	<span>${Frase}</span>' +
			'</li>'
	};
	
	T.ListaBoxAmigos =
	{
		listItem:
		{
			content: '<li class="${Plano}"><a href="${PerfilUrl}" title="${Apelido}"><img src="${FotoUrl}" width="75" height="100" alt="${Apelido}" /></a></li>'
		},
	
		listWrapper: '<ul class="listWrapper bgPlans"></ul>',
	
		noContent: '<li class="noContent">Nenhum amigo</li>'
	};
	
	T.ListaSolicitacaoAmizade =
	{
		listItem:
		{
			content:
				'<li class="${Plano}">' +
				'	<a href="${PerfilUrl}${Id}" title="${Apelido}">${PlaceFoto}</a>' +
				'	<div>' +
				'		<h6><a href="${PerfilUrl}${Id}" title="${Nome}">${Apelido}</a></h6>' +
				'		<p>${Mensagem}</p>' +
				'		<p class="infos">${DataConviteFormatada}</p>' +
				'		<p><a href="#" title="Aceita" class="bt_accept">Aceita</a> ou <a href="#" title="Recusar" class="bt_refusal ${Id}">Recusar</a></p>' +
				'	</div>' +
				'</li>'
		},
	
		listWrapper: '<ul class="listWrapper bgPlans"></ul>',
		
		noContent: '<small class="noContent">Sem solicitações de amizades</small>'
	};
	
	T.Mensagens =
	{
		modalSendMessage:
			'<div class="modal sendMessage">' +
			'   <h4>Enviar mensagem</h4>' +
			'	<a href="#" class="bt_close" title="Fechar">Fechar</a>' +
			'	<form action="">' +
			'   	<label for="message2">Deixe sua mensagem:</label>' +
			'		<strong class="caracter">140</strong>' +
			'		<textarea class="{required:true}" id="message2" cols="69" rows="5"></textarea>' +
			'       <button type="submit" class="bt_send">Enviar</button>' +
			'		<button type="button" class="bt_cancel">Cancelar</button>' +
			'   </form>' +
			'</div>',
			
		modalDeleteMessage: 
			'<div class="modal deleteMessage">' +
			'	<h4>Deseja realmente excluir essa Mensagem?</h4>' +
			'	<a href="#" class="bt_close" title="Fechar">Fechar</a>' +
			'	<input class="token" type="hidden" />' +
			'   <button type="submit" class="bt_ok">OK</button>' +
			'	<button type="button" class="bt_cancel">Cancelar</button>' +
			'</div>'
	};
	
	T.ListaMensagensInicio =
	{
		listItem:
		{
			content:
				'<li class="${Plano}">' +
				'	${PlaceFoto}' +
				'	<div>' +
				'		<h6><a href="${PerfilUrl}${Id}" title="${Nome}">${Apelido}</a></h6>' +
				'		<span>${DataFormatada}</span>' +
				'		<p>${Texto}</p>' +
				'		<a href="#" class="bt_response" title="Responder">Responder</a>' +
				'		<a href="#" class="bt_delete">Remover</a>' + 
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'		<!--não deletar removeBug-->' +
				'	</div>' +
				'</li>',
			
			tagFoto: '<a href="${PerfilUrl}${Id}" title="${Nome}"><img src="${FotoUrl}" alt="${Nome}" title="${Nome}" /></a>',
	
			link: '<a href="${PerfilUrl}${Id}" title="${Apelido}">${Apelido}</a>',
			
			noContent: '<small class="noContent">Sem mensagens</small>'
		},
	
		listWrapper: '<ul class="listWrapper bgPlans"></ul>',
		
		system: 
			'<div class="paymentSystem">' +
			'	<p>${Texto}</p>' +
			'</div>'
	};
	
	T.ListaMensagensInicioSistema =
	{
		listItem:
		{
			content: '<p>${Texto}</p>'
		},
	
		listWrapper: '<div class="paymentSystem listWrapper"></div>',
		
		noContent:''
	};
	
	T.ListaMensagens =
	{
		listItem:
		{
			content:
				'<li>' +
				'	${PlaceFoto}' +
				'	<div>' +
				'		<h6>${PlaceLink}</h6>' +
				'		<p>${Texto}</p>' +
				'		<p class="infos">${DataFormatada}</p>' +
				'	</div>' +
				'	${PlaceBotoes}' +
				'</li>',
	
			tagFoto: '<a href="${PerfilUrl}${Id}" title="${Nome}"><img src="${FotoUrl}" alt="${Nome}" title="${Nome}" /></a>',
	
			link: '<a href="${PerfilUrl}${IdUsuario}" title="${NomeUsuario}">${NomeUsuario}</a>'
		},
	
		listWrapper: '<ul class="listWrapper"></ul>',
	
		modalDeleteMessage:
			'<div class="mainModal modal">' +
			'	<div class="phModal">' +
			'		<strong>Deseja realmente excluir essa Mensagem?</strong>' +
			'	</div>' +
			'	<a href="#" class="bt_close" title="Fechar">Fechar</a>' +
			'	<span class="button" style="margin-left:30px"><input class="token" type="hidden" />' +
			'<button type="button" class="btFechar">Não</button>' +
			'</span>' +
			'<span class="button">' +
			'    <button type="button" class="btAceitar">Sim</button>' +
			'</span>' +
			'</div>'
	};
	
	T.MicroBlogs =
	{
		listItem:
		{
			content:
				'<div class="${IsFirst} noBorder">' +
				'	<p class="txtPost">${Mensagem}</p>' +
				'	<p class="datePost">Em ${Dia} às ${Horario}</p>' +
				'</div>'
		},
		
		listWrapper: '<div class="listWrapper"></div>',
		
		noContent: '<small class="noContent" style="color: #ccc; font-size:11px;">Sem conteúdo disponível</small>',
			
		modalSendPost:
			'<div class="modal modalMicroblog">' +
			'   <h4>Enviar mensagem</h4>' +
			'	<a href="#" class="bt_close" title="Fechar">Fechar</a>' +
			'	<form action="#">' +
			'   	<label for="message2">Deixe sua mensagem:</label>' +
			'		<strong class="caracter">140</strong>' +
			'		<textarea name="aMsg" id="message2" cols="69" rows="5" class="{required:true}" title="Preencha a mensagem antes de enviar"></textarea>' +
			'       <button type="submit" class="bt_send">Enviar</button>' +
			'		<button type="button" class="bt_cancel">Cancelar</button>' +
			'   </form>' +
			'</div>'
	};
	
	
	T.ListaAmigos =
	{
		listItem:
		{ 
			content:
				'<li class="${Plano}">' +
				'	<a href="${PerfilUrl}"><img src="${FotoUrl}" alt="${Apelido}" title="${Apelido}" /></a>' +
				'	<div>' +
				'		<h6>${Nome}</h6>' +
				'   	<a class="bt_response" title="Enviar Mensagem" href="#">Enviar Mensagem</a>' +
				'    	<a href="#" title="Remover" class="bt_delete">Remover</a>' +
				'	</div>' +
				'</li>'    
		},
		
		listWrapper: '<ul class="bgPlans listWrapper"></ul>',
		
		noContent: '<p class="noContent">Você não possui nenhum amigo</p>'
	};
	
	T.PlanoHistoricos =
	{
		listItem:
		{
			content: 
				'<li class="date${ParImpar}">${DataFormatada}</li>' +
				'<li class="description${ParImpar}">${Texto}</li>'
		},
		
		listWrapper: '<ul class="dadosPlan listWrapper"></ul>'
	};
	
	T.Downloads =
	{
		Wallpaper:
		{
			listItem:
			{
				content:
					'<li class="${ParImpar}">' +
					'<img src="${ThumbUrl}?imagem=${NomeArquivo}&w=${Largura}&h=${Altura}" alt="image" />' +
					'<div>' +
					'    <strong>${Titulo}</strong> ' +
					'${htmlItens}' +
					'</div>' +
					'</li>',
					
				resolutionItem: '<a href="${link}" title="${title}">${title}</a>'
			},
		
			listWrapper: '<ul class="savers listWrapper"></ul>',
		
			box:
			{
				content:
					'<h5>Wallpapers</h5>' +
					'<img src="${ThumbUrl}?imagem=${NomeArquivo}&w=${Largura}&h=${Altura}" alt="image" />' +
					'<div>' +
					'	<strong>${Titulo}</strong>' +
					'	${htmlItens}' +
					'</div>' +
					'<a href="${urlVejaTodos}" class="bt_seeAll" title="Veja todos">Veja todos</a>',
				
				resolutionItem: '<a href="${link}" title="${title}">${title}</a>'
			},
		
			sidebar: {
				content:
					'<h4>Downloads</h4>' +
					'<img src="${ThumbUrl}?imagem=${NomeArquivo}&w=${Largura}&h=${Altura}" alt="wallpaper" />' + 
					'<p>Wallpaper</p>' +
					'<a title="${Titulo}">${Titulo}</a>' +
					'<div>' +
					'	<a href="${urlVejaTodosWall}" title="Wallpapers" class="bt_wallpaper">Wallpapers</a> <a href="${urlVejaTodosScreen}" title="Descansos de tela"' +
					'    class="bt_screen">Descansos de tela</a>' +
					'</div>',
					
				resolutionItem: '<a href="${link}" title="${title}">${title}</a>'
			}
		},
		
		Screensaver:
		{
			listItem:
			{
				content:
					'<li class="${ParImpar}">' +
					'	<img src="${ThumbUrl}?imagem=${NomeArquivo}&w=${Largura}&h=${Altura}" alt="image" />' +
					'	<div>${htmlItens}</div>' +
					'</li>',
					
				resolutionItem: '<a href="${link}" title="${title}"><strong>${title}</strong></a>'
			},
		
			listWrapper: '<ul class="savers listWrapper"></ul>',
			
			box:
			{
				content:
					'<h5>Descansos de telas</h5>' +
					'<img src="${ThumbUrl}?imagem=${NomeArquivo}&w=${Largura}&h=${Altura}" alt="image" />' +
					'<div>${htmlItens}</div>' +
					'<a href="${urlVejaTodos}" class="bt_seeAll" title="Veja todos">Veja todos</a>',
					
				resolutionItem: '<a href="${link}" title="${title}"><strong>${title}</strong></a>'
			}
		},
		
		Ranking:
		{
			listItem:
			{
				content:
					'<tr ${Classe}> ' +
						'<td class="center">${Rank}</td>' +
						'<td>${Titulo}</td>'+
						'<td>${Tipo}</td>'+
						'<td>${Downloads}</td>'+
					'</tr>'
			},
		
			listWrapper: '<tbody class="listWrapper"></tbody>'
		}
	}