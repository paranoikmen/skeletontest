// jshint ignore: start
const antlr4 = require('antlr4');

// This class defines a complete generic visitor for a parse tree produced by Java9Parser.

class Java9Visitor extends antlr4.tree.ParseTreeVisitor {
	classes = []
	methods = []
	attributes = []

	tmpClass = []
	tmpMethod = []
	tmpAttributes = []
	tmpType = []

	classStack = []
	methodStack = []
	attributesStack = []

	tmp
	test = []

	classFlag = 0
	methodFlag = 0
	attributesFlag = 0

	fun(i){
		this.test.push(i)
	}

	// Visit a parse tree produced by Java9Parser#literal.
	visitLiteral(ctx) {
		this.fun(42 + "	visitLiteral")
		this.classStack.pop()
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primitiveType.
	visitPrimitiveType(ctx) {
		this.fun(47 + "	visitPrimitiveType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#numericType.
	visitNumericType(ctx) {
		this.fun(54 + "	visitNumericType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#integralType.
	visitIntegralType(ctx) {
		this.fun(62 + "	visitIntegralType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#floatingPointType.
	visitFloatingPointType(ctx) {
		this.fun(68 + "	visitFloatingPointType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#referenceType.
	visitReferenceType(ctx) {
		this.fun(75 + "	visitReferenceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classOrInterfaceType.
	visitClassOrInterfaceType(ctx) {
		this.fun(82 + "	visitClassOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classType.
	visitClassType(ctx) {
		this.fun(90 + "	visitClassType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classType_lf_classOrInterfaceType.
	visitClassType_lf_classOrInterfaceType(ctx) {
		this.fun(98 + "	visitClassType_lf_classOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classType_lfno_classOrInterfaceType.
	visitClassType_lfno_classOrInterfaceType(ctx) {
		this.fun(106 + "	visitClassType_lfno_classOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceType.
	visitInterfaceType(ctx) {
		this.fun(113 + "	visitInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceType_lf_classOrInterfaceType.
	visitInterfaceType_lf_classOrInterfaceType(ctx) {
		this.fun(120 + "	visitInterfaceType_lf_classOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceType_lfno_classOrInterfaceType.
	visitInterfaceType_lfno_classOrInterfaceType(ctx) {
		this.fun(127 + "	visitInterfaceType_lfno_classOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeVariable.
	visitTypeVariable(ctx) {
		this.fun(134 + "	visitTypeVariable")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayType.
	visitArrayType(ctx) {
		this.fun(141 + "	visitArrayType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#dims.
	visitDims(ctx) {
		this.fun(148 + "	visitDims")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeParameter.
	visitTypeParameter(ctx) {
		this.fun(155 + "	visitTypeParameter")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeParameterModifier.
	visitTypeParameterModifier(ctx) {
		this.fun(162 + "	visitTypeParameterModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeBound.
	visitTypeBound(ctx) {
		this.fun(170 + "	visitTypeBound")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#additionalBound.
	visitAdditionalBound(ctx) {
		this.fun(177 + "	visitAdditionalBound")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeArguments.
	visitTypeArguments(ctx) {
		this.fun(184 + "	visitTypeArguments")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeArgumentList.
	visitTypeArgumentList(ctx) {
		this.fun(191 + "	visitTypeArgumentList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeArgument.
	visitTypeArgument(ctx) {
		this.fun(198 + "	visitTypeArgument")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#wildcard.
	visitWildcard(ctx) {
		this.fun(205 + "	visitWildcard")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#wildcardBounds.
	visitWildcardBounds(ctx) {
		this.fun(212 + "	visitWildcardBounds")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#moduleName.
	visitModuleName(ctx) {
		this.fun(219 + "	visitModuleName")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#packageName.
	visitPackageName(ctx) {
		this.fun(226 + "	visitPackageName")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeName.
	visitTypeName(ctx) {
		this.fun(234 + "	visitTypeName")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#packageOrTypeName.
	visitPackageOrTypeName(ctx) {
		this.fun(241 + "	visitPackageOrTypeName")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#expressionName.
	visitExpressionName(ctx) {
		this.fun(248 + "	visitExpressionName")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodName.
	visitMethodName(ctx) {
		this.fun(256 + "	visitMethodName")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ambiguousName.
	visitAmbiguousName(ctx) {
		this.fun(263 + "	visitAmbiguousName")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#compilationUnit.
	visitCompilationUnit(ctx) {
		this.fun(270 + "	visitCompilationUnit")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ordinaryCompilation.
	visitOrdinaryCompilation(ctx) {
		this.fun(277 + "	visitOrdinaryCompilation")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#modularCompilation.
	visitModularCompilation(ctx) {
		this.fun(284 + "	visitModularCompilation")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#packageDeclaration.
	visitPackageDeclaration(ctx) {
		this.fun(291 + "	visitPackageDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#packageModifier.
	visitPackageModifier(ctx) {
		this.fun(298 + "	visitPackageModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#importDeclaration.
	visitImportDeclaration(ctx) {
		this.fun(305 + "	visitImportDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#singleTypeImportDeclaration.
	visitSingleTypeImportDeclaration(ctx) {
		this.fun(312 + "	visitSingleTypeImportDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeImportOnDemandDeclaration.
	visitTypeImportOnDemandDeclaration(ctx) {
		this.fun(319 + "	visitTypeImportOnDemandDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#singleStaticImportDeclaration.
	visitSingleStaticImportDeclaration(ctx) {
		this.fun(326 + "	visitSingleStaticImportDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#staticImportOnDemandDeclaration.
	visitStaticImportOnDemandDeclaration(ctx) {
		this.fun(333 + "	visitStaticImportOnDemandDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeDeclaration.
	visitTypeDeclaration(ctx) {
		this.fun(340 + "	visitTypeDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#moduleDeclaration.
	visitModuleDeclaration(ctx) {
		this.fun(347 + "	visitModuleDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#moduleDirective.
	visitModuleDirective(ctx) {
		this.fun(354 + "	visitModuleDirective")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#requiresModifier.
	visitRequiresModifier(ctx) {
		this.fun(361 + "	visitRequiresModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classDeclaration.
	visitClassDeclaration(ctx) {
		this.fun(368 + "	visitClassDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#normalClassDeclaration.
	visitNormalClassDeclaration(ctx) {
		this.fun(375 + "	visitNormalClassDeclaration")
		this.classFlag = 1
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classModifier.
	visitClassModifier(ctx) {
		this.fun(386 + "	visitClassModifier")
		this.tmpClass.push(ctx.getText())
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeParameters.
	visitTypeParameters(ctx) {
		this.fun(393 + "	visitTypeParameters")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeParameterList.
	visitTypeParameterList(ctx) {
		this.fun(400 + "	visitTypeParameterList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#superclass.
	visitSuperclass(ctx) {
		this.fun(407 + "	visitSuperclass")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#superinterfaces.
	visitSuperinterfaces(ctx) {
		this.fun(414 + "	visitSuperinterfaces")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceTypeList.
	visitInterfaceTypeList(ctx) {
		this.fun(421 + "	visitInterfaceTypeList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classBody.
	visitClassBody(ctx) {
		this.fun(428 + "	visitClassBody")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classBodyDeclaration.
	visitClassBodyDeclaration(ctx) {
		this.fun(435 + "	visitClassBodyDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classMemberDeclaration.
	visitClassMemberDeclaration(ctx) {
		this.fun(442 + "	visitClassMemberDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldDeclaration.
	visitFieldDeclaration(ctx) {
		this.fun(449 + "	visitFieldDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldModifier.
	visitFieldModifier(ctx) {
		this.fun(456 + "	visitFieldModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableDeclaratorList.
	visitVariableDeclaratorList(ctx) {
		this.fun(463 + "	visitVariableDeclaratorList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableDeclarator.
	visitVariableDeclarator(ctx) {
		this.fun(470 + "	visitVariableDeclarator")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableDeclaratorId.
	visitVariableDeclaratorId(ctx) {
		this.fun(477 + "	visitVariableDeclaratorId")
		this.attributesFlag = 1
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableInitializer.
	visitVariableInitializer(ctx) {
		this.fun(484 + "	visitVariableInitializer")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannType.
	visitUnannType(ctx) {
		this.fun(491 + "	visitUnannType")
		this.tmpAttributes.push(ctx.getText())
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannPrimitiveType.
	visitUnannPrimitiveType(ctx) {
		this.fun(498 + "	visitUnannPrimitiveType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannReferenceType.
	visitUnannReferenceType(ctx) {
		this.fun(505 + "	visitUnannReferenceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannClassOrInterfaceType.
	visitUnannClassOrInterfaceType(ctx) {
		this.fun(512 + "	visitUnannClassOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannClassType.
	visitUnannClassType(ctx) {
		this.fun(519 + "	visitUnannClassType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannClassType_lf_unannClassOrInterfaceType.
	visitUnannClassType_lf_unannClassOrInterfaceType(ctx) {
		this.fun(527 + "	visitUnannClassType_lf_unannClassOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannClassType_lfno_unannClassOrInterfaceType.
	visitUnannClassType_lfno_unannClassOrInterfaceType(ctx) {
		this.fun(535 + "	visitUnannClassType_lfno_unannClassOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannInterfaceType.
	visitUnannInterfaceType(ctx) {
		this.fun(543 + "	visitUnannInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannInterfaceType_lf_unannClassOrInterfaceType.
	visitUnannInterfaceType_lf_unannClassOrInterfaceType(ctx) {
		this.fun(550 + "	visitUnannInterfaceType_lf_unannClassOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannInterfaceType_lfno_unannClassOrInterfaceType.
	visitUnannInterfaceType_lfno_unannClassOrInterfaceType(ctx) {
		this.fun(557 + "	visitUnannInterfaceType_lfno_unannClassOrInterfaceType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannTypeVariable.
	visitUnannTypeVariable(ctx) {
		this.fun(564 + "	visitUnannTypeVariable")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unannArrayType.
	visitUnannArrayType(ctx) {
		this.fun(571 + "	visitUnannArrayType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodDeclaration.
	visitMethodDeclaration(ctx) {
		this.fun(578 + "	visitMethodDeclaration")
		this.methodStack.pop()
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodModifier.
	visitMethodModifier(ctx) {
		this.fun(586 + "	visitMethodModifier")
		this.tmpMethod.push(ctx.getText())
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodHeader.
	visitMethodHeader(ctx) {
		this.fun(593 + "	visitMethodHeader")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#result.
	visitResult(ctx) {
		this.fun(601 + "	visitResult")
		this.tmpType.push(ctx.getText())
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodDeclarator.
	visitMethodDeclarator(ctx) {
		this.fun(608 + "	visitMethodDeclarator")
		this.methodFlag = 1
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#formalParameterList.
	visitFormalParameterList(ctx) {
		this.fun(615 + "	visitFormalParameterList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#formalParameters.
	visitFormalParameters(ctx) {
		this.fun(622 + "	visitFormalParameters")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#formalParameter.
	visitFormalParameter(ctx) {
		this.fun(629 + "	visitFormalParameter")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableModifier.
	visitVariableModifier(ctx) {
		this.fun(636 + "	visitVariableModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#lastFormalParameter.
	visitLastFormalParameter(ctx) {
		this.fun(643 + "	visitLastFormalParameter")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#receiverParameter.
	visitReceiverParameter(ctx) {
		this.fun(650 + "	visitReceiverParameter")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#throws_.
	visitThrows_(ctx) {
		this.fun(567 + "	visitThrows_")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#exceptionTypeList.
	visitExceptionTypeList(ctx) {
		this.fun(664 + "	visitExceptionTypeList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#exceptionType.
	visitExceptionType(ctx) {
		this.fun(671 + "	visitExceptionType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodBody.
	visitMethodBody(ctx) {
		this.fun(678 + "	visitMethodBody")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#instanceInitializer.
	visitInstanceInitializer(ctx) {
		this.fun(685 + "	visitInstanceInitializer")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#staticInitializer.
	visitStaticInitializer(ctx) {
		this.fun(692 + "	visitStaticInitializer")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constructorDeclaration.
	visitConstructorDeclaration(ctx) {
		this.fun(699 + "	visitConstructorDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constructorModifier.
	visitConstructorModifier(ctx) {
		this.fun(706 + "	visitConstructorModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constructorDeclarator.
	visitConstructorDeclarator(ctx) {
		this.fun(713 + "	visitConstructorDeclarator")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#simpleTypeName.
	visitSimpleTypeName(ctx) {
		this.fun(720 + "	visitSimpleTypeName")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constructorBody.
	visitConstructorBody(ctx) {
		this.fun(727 + "	visitConstructorBody")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#explicitConstructorInvocation.
	visitExplicitConstructorInvocation(ctx) {
		this.fun(734 + "	visitExplicitConstructorInvocation")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumDeclaration.
	visitEnumDeclaration(ctx) {
		this.fun(741 + "	visitEnumDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumBody.
	visitEnumBody(ctx) {
		this.fun(748 + "	visitEnumBody")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumConstantList.
	visitEnumConstantList(ctx) {
		this.fun(755 + "	visitEnumConstantList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumConstant.
	visitEnumConstant(ctx) {
		this.fun(762 + "	visitEnumConstant")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumConstantModifier.
	visitEnumConstantModifier(ctx) {
		this.fun(769 + "	visitEnumConstantModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumBodyDeclarations.
	visitEnumBodyDeclarations(ctx) {
		this.fun(776 + "	visitEnumBodyDeclarations")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceDeclaration.
	visitInterfaceDeclaration(ctx) {
		this.fun(783 + "	visitInterfaceDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#normalInterfaceDeclaration.
	visitNormalInterfaceDeclaration(ctx) {
		this.fun(790 + "	visitNormalInterfaceDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceModifier.
	visitInterfaceModifier(ctx) {
		this.fun(797 + "	visitInterfaceModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#extendsInterfaces.
	visitExtendsInterfaces(ctx) {
		this.fun(804 + "	visitExtendsInterfaces")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceBody.
	visitInterfaceBody(ctx) {
		this.fun(811 + "	visitInterfaceBody")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceMemberDeclaration.
	visitInterfaceMemberDeclaration(ctx) {
		this.fun(818 + "	visitInterfaceMemberDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constantDeclaration.
	visitConstantDeclaration(ctx) {
		this.fun(825 + "	visitConstantDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constantModifier.
	visitConstantModifier(ctx) {
		this.fun(832 + "	visitConstantModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceMethodDeclaration.
	visitInterfaceMethodDeclaration(ctx) {
		this.fun(839 + "	visitInterfaceMethodDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#interfaceMethodModifier.
	visitInterfaceMethodModifier(ctx) {
		this.fun(846 + "	visitInterfaceMethodModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeDeclaration.
	visitAnnotationTypeDeclaration(ctx) {
		this.fun(853 + "	visitAnnotationTypeDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeBody.
	visitAnnotationTypeBody(ctx) {
		this.fun(860 + "	visitAnnotationTypeBody")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeMemberDeclaration.
	visitAnnotationTypeMemberDeclaration(ctx) {
		this.fun(867 + "	visitAnnotationTypeMemberDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeElementDeclaration.
	visitAnnotationTypeElementDeclaration(ctx) {
		this.fun(874 + "	visitAnnotationTypeElementDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotationTypeElementModifier.
	visitAnnotationTypeElementModifier(ctx) {
		this.fun(881 + "	visitAnnotationTypeElementModifier")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#defaultValue.
	visitDefaultValue(ctx) {
		this.fun(888 + "	visitDefaultValue")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#annotation.
	visitAnnotation(ctx) {
		this.fun(895 + "	visitAnnotation")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#normalAnnotation.
	visitNormalAnnotation(ctx) {
		this.fun(902 + "	visitNormalAnnotation")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValuePairList.
	visitElementValuePairList(ctx) {
		this.fun(909 + "	visitElementValuePairList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValuePair.
	visitElementValuePair(ctx) {
		this.fun(916 + "	visitElementValuePair")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValue.
	visitElementValue(ctx) {
		this.fun(923 + "	visitElementValue")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValueArrayInitializer.
	visitElementValueArrayInitializer(ctx) {
		this.fun(930 + "	visitElementValueArrayInitializer")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#elementValueList.
	visitElementValueList(ctx) {
		this.fun(937 + "	visitElementValueList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#markerAnnotation.
	visitMarkerAnnotation(ctx) {
		this.fun(944 + "	visitMarkerAnnotation")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#singleElementAnnotation.
	visitSingleElementAnnotation(ctx) {
		this.fun(951 + "	visitSingleElementAnnotation")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayInitializer.
	visitArrayInitializer(ctx) {
		this.fun(958 + "	visitArrayInitializer")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableInitializerList.
	visitVariableInitializerList(ctx) {
		this.fun(965 + "	visitVariableInitializerList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#block.
	visitBlock(ctx) {
		this.fun(972 + "	visitBlock")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#blockStatements.
	visitBlockStatements(ctx) {
		this.fun(979 + "	visitBlockStatements")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#blockStatement.
	visitBlockStatement(ctx) {
		this.fun(986 + "	visitBlockStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#localVariableDeclarationStatement.
	visitLocalVariableDeclarationStatement(ctx) {
		this.fun(993 + "	visitLocalVariableDeclarationStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#localVariableDeclaration.
	visitLocalVariableDeclaration(ctx) {
		this.fun(1000 + "	visitLocalVariableDeclaration")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statement.
	visitStatement(ctx) {
		this.fun(1007 + "	visitStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statementNoShortIf.
	visitStatementNoShortIf(ctx) {
		this.fun(1014 + "	visitStatementNoShortIf")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statementWithoutTrailingSubstatement.
	visitStatementWithoutTrailingSubstatement(ctx) {
		this.fun(1021 + "	visitStatementWithoutTrailingSubstatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#emptyStatement.
	visitEmptyStatement(ctx) {
		this.fun(1028 + "	visitEmptyStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#labeledStatement.
	visitLabeledStatement(ctx) {
		this.fun(1035 + "	visitLabeledStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#labeledStatementNoShortIf.
	visitLabeledStatementNoShortIf(ctx) {
		this.fun(1042 + "	visitLabeledStatementNoShortIf")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#expressionStatement.
	visitExpressionStatement(ctx) {
		this.fun(1049 + "	visitExpressionStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statementExpression.
	visitStatementExpression(ctx) {
		this.fun(1056 + "	visitStatementExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ifThenStatement.
	visitIfThenStatement(ctx) {
		this.fun(1063 + "	visitIfThenStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ifThenElseStatement.
	visitIfThenElseStatement(ctx) {
		this.fun(1070 + "	visitIfThenElseStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#ifThenElseStatementNoShortIf.
	visitIfThenElseStatementNoShortIf(ctx) {
		this.fun(1077 + "	visitIfThenElseStatementNoShortIf")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#assertStatement.
	visitAssertStatement(ctx) {
		this.fun(1084 + "	visitAssertStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchStatement.
	visitSwitchStatement(ctx) {
		this.fun(1091 + "	visitSwitchStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchBlock.
	visitSwitchBlock(ctx) {
		this.fun(1098 + "	visitSwitchBlock")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchBlockStatementGroup.
	visitSwitchBlockStatementGroup(ctx) {
		this.fun(1105 + "	visitSwitchBlockStatementGroup")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchLabels.
	visitSwitchLabels(ctx) {
		this.fun(1112 + "	visitSwitchLabels")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#switchLabel.
	visitSwitchLabel(ctx) {
		this.fun(1119 + "	visitSwitchLabel")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enumConstantName.
	visitEnumConstantName(ctx) {
		this.fun(1126 + "	visitEnumConstantName")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#whileStatement.
	visitWhileStatement(ctx) {
		this.fun(1133 + "	visitWhileStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#whileStatementNoShortIf.
	visitWhileStatementNoShortIf(ctx) {
		this.fun(1140 + "	visitWhileStatementNoShortIf")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#doStatement.
	visitDoStatement(ctx) {
		this.fun(1147 + "	visitDoStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#forStatement.
	visitForStatement(ctx) {
		this.fun(1154 + "	visitForStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#forStatementNoShortIf.
	visitForStatementNoShortIf(ctx) {
		this.fun(1161 + "	visitForStatementNoShortIf")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#basicForStatement.
	visitBasicForStatement(ctx) {
		this.fun(1168 + "	visitBasicForStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#basicForStatementNoShortIf.
	visitBasicForStatementNoShortIf(ctx) {
		this.fun(1175 + "	visitBasicForStatementNoShortIf")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#forInit.
	visitForInit(ctx) {
		this.fun(1182 + "	visitForInit")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#forUpdate.
	visitForUpdate(ctx) {
		this.fun(1189 + "	visitForUpdate")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#statementExpressionList.
	visitStatementExpressionList(ctx) {
		this.fun(1196 + "	visitStatementExpressionList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enhancedForStatement.
	visitEnhancedForStatement(ctx) {
		this.fun(1203 + "	visitEnhancedForStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#enhancedForStatementNoShortIf.
	visitEnhancedForStatementNoShortIf(ctx) {
		this.fun(1210 + "	visitEnhancedForStatementNoShortIf")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#breakStatement.
	visitBreakStatement(ctx) {
		this.fun(1217 + "	visitBreakStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#continueStatement.
	visitContinueStatement(ctx) {
		this.fun(1224 + "	visitContinueStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#returnStatement.
	visitReturnStatement(ctx) {
		this.fun(1231 + "	visitReturnStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#throwStatement.
	visitThrowStatement(ctx) {
		this.fun(1238 + "	visitThrowStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#synchronizedStatement.
	visitSynchronizedStatement(ctx) {
		this.fun(1245 + "	visitSynchronizedStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#tryStatement.
	visitTryStatement(ctx) {
		this.fun(1252 + "	visitTryStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#catches.
	visitCatches(ctx) {
		this.fun(1259 + "	visitCatches")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#catchClause.
	visitCatchClause(ctx) {
		this.fun(1266 + "	visitCatchClause")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#catchFormalParameter.
	visitCatchFormalParameter(ctx) {
		this.fun(1273 + "	visitCatchFormalParameter")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#catchType.
	visitCatchType(ctx) {
		this.fun(1280 + "	visitCatchType")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#finally_.
	visitFinally_(ctx) {
		this.fun(1287 + "	visitFinally_")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#tryWithResourcesStatement.
	visitTryWithResourcesStatement(ctx) {
		this.fun(1294 + "	visitTryWithResourcesStatement")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#resourceSpecification.
	visitResourceSpecification(ctx) {
		this.fun(1301 + "	visitResourceSpecification")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#resourceList.
	visitResourceList(ctx) {
		this.fun(1308 + "	visitResourceList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#resource.
	visitResource(ctx) {
		this.fun(1315 + "	visitResource")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#variableAccess.
	visitVariableAccess(ctx) {
		this.fun(1322 + "	visitVariableAccess")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primary.
	visitPrimary(ctx) {
		this.fun(1329 + "	visitPrimary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray.
	visitPrimaryNoNewArray(ctx) {
		this.fun(1336 + "	visitPrimaryNoNewArray")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lf_arrayAccess.
	visitPrimaryNoNewArray_lf_arrayAccess(ctx) {
		this.fun(1343 + "	visitPrimaryNoNewArray_lf_arrayAccess")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lfno_arrayAccess.
	visitPrimaryNoNewArray_lfno_arrayAccess(ctx) {
		this.fun(1350 + "	visitPrimaryNoNewArray_lfno_arrayAccess")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lf_primary.
	visitPrimaryNoNewArray_lf_primary(ctx) {
		this.fun(1357 + "	visitPrimaryNoNewArray_lf_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary.
	visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(ctx) {
		this.fun(1364 + "	visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary.
	visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(ctx) {
		this.fun(1371 + "	visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lfno_primary.
	visitPrimaryNoNewArray_lfno_primary(ctx) {
		this.fun(1378 + "	visitPrimaryNoNewArray_lfno_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary.
	visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(ctx) {
		this.fun(1385 + "	visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary.
	visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(ctx) {
		this.fun(1392 + "	visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classLiteral.
	visitClassLiteral(ctx) {
		this.fun(1399 + "	visitClassLiteral")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classInstanceCreationExpression.
	visitClassInstanceCreationExpression(ctx) {
		this.fun(1407 + "	visitClassInstanceCreationExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classInstanceCreationExpression_lf_primary.
	visitClassInstanceCreationExpression_lf_primary(ctx) {
		this.fun(1414 + "	visitClassInstanceCreationExpression_lf_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#classInstanceCreationExpression_lfno_primary.
	visitClassInstanceCreationExpression_lfno_primary(ctx) {
		this.fun(1421 + "	visitClassInstanceCreationExpression_lfno_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#typeArgumentsOrDiamond.
	visitTypeArgumentsOrDiamond(ctx) {
		this.fun(1428 + "	visitTypeArgumentsOrDiamond")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldAccess.
	visitFieldAccess(ctx) {
		this.fun(1435 + "	visitFieldAccess")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldAccess_lf_primary.
	visitFieldAccess_lf_primary(ctx) {
		this.fun(1442 + "	visitFieldAccess_lf_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#fieldAccess_lfno_primary.
	visitFieldAccess_lfno_primary(ctx) {
		this.fun(1449 + "	visitFieldAccess_lfno_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayAccess.
	visitArrayAccess(ctx) {
		this.fun(1456 + "	visitArrayAccess")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayAccess_lf_primary.
	visitArrayAccess_lf_primary(ctx) {
		this.fun(1463 + "	visitArrayAccess_lf_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayAccess_lfno_primary.
	visitArrayAccess_lfno_primary(ctx) {
		this.fun(1470 + "	visitArrayAccess_lfno_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodInvocation.
	visitMethodInvocation(ctx) {
		this.fun(1477 + "	visitMethodInvocation")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodInvocation_lf_primary.
	visitMethodInvocation_lf_primary(ctx) {
		this.fun(1484 + "	visitMethodInvocation_lf_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodInvocation_lfno_primary.
	visitMethodInvocation_lfno_primary(ctx) {
		this.fun(1491 + "	visitMethodInvocation_lfno_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#argumentList.
	visitArgumentList(ctx) {
		this.fun(1498 + "	visitArgumentList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodReference.
	visitMethodReference(ctx) {
		this.fun(1505 + "	visitMethodReference")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodReference_lf_primary.
	visitMethodReference_lf_primary(ctx) {
		this.fun(1512 + "	visitMethodReference_lf_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#methodReference_lfno_primary.
	visitMethodReference_lfno_primary(ctx) {
		this.fun(1519 + "	visitMethodReference_lfno_primary")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#arrayCreationExpression.
	visitArrayCreationExpression(ctx) {
		this.fun(1526 + "	visitArrayCreationExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#dimExprs.
	visitDimExprs(ctx) {
		this.fun(1533 + "	visitDimExprs")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#dimExpr.
	visitDimExpr(ctx) {
		this.fun(1540 + "	visitDimExpr")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#constantExpression.
	visitConstantExpression(ctx) {
		this.fun(1547 + "	visitConstantExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#expression.
	visitExpression(ctx) {
		this.fun(1554 + "	visitExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#lambdaExpression.
	visitLambdaExpression(ctx) {
		this.fun(1561 + "	visitLambdaExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#lambdaParameters.
	visitLambdaParameters(ctx) {
		this.fun(1568 + "	visitLambdaParameters")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#inferredFormalParameterList.
	visitInferredFormalParameterList(ctx) {
		this.fun(1575 + "	visitInferredFormalParameterList")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#lambdaBody.
	visitLambdaBody(ctx) {
		this.fun(1582 + "	visitLambdaBody")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#assignmentExpression.
	visitAssignmentExpression(ctx) {
		this.fun(1589 + "	visitAssignmentExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#assignment.
	visitAssignment(ctx) {
		this.fun(1596 + "	visitAssignment")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#leftHandSide.
	visitLeftHandSide(ctx) {
		this.fun(1603 + "	visitLeftHandSide")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#assignmentOperator.
	visitAssignmentOperator(ctx) {
		this.fun(1610 + "	visitAssignmentOperator")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#conditionalExpression.
	visitConditionalExpression(ctx) {
		this.fun(1617 + "	visitConditionalExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#conditionalOrExpression.
	visitConditionalOrExpression(ctx) {
		this.fun(1624 + "	visitConditionalOrExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#conditionalAndExpression.
	visitConditionalAndExpression(ctx) {
		this.fun(1631 + "	visitConditionalAndExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#inclusiveOrExpression.
	visitInclusiveOrExpression(ctx) {
		this.fun(1638 + "	visitInclusiveOrExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#exclusiveOrExpression.
	visitExclusiveOrExpression(ctx) {
		this.fun(1645 + "	visitExclusiveOrExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#andExpression.
	visitAndExpression(ctx) {
		this.fun(1652 + "	visitAndExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#equalityExpression.
	visitEqualityExpression(ctx) {
		this.fun(1659 + "	visitEqualityExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#relationalExpression.
	visitRelationalExpression(ctx) {
		this.fun(1666 + "	visitRelationalExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#shiftExpression.
	visitShiftExpression(ctx) {
		this.fun(1673 + "	visitShiftExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#additiveExpression.
	visitAdditiveExpression(ctx) {
		this.fun(1680 + "	visitAdditiveExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#multiplicativeExpression.
	visitMultiplicativeExpression(ctx) {
		this.fun(1687 + "	visitMultiplicativeExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unaryExpression.
	visitUnaryExpression(ctx) {
		this.fun(1694 + "	visitUnaryExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#preIncrementExpression.
	visitPreIncrementExpression(ctx) {
		this.fun(1701 + "	visitPreIncrementExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#preDecrementExpression.
	visitPreDecrementExpression(ctx) {
		this.fun(1708 + "	visitPreDecrementExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#unaryExpressionNotPlusMinus.
	visitUnaryExpressionNotPlusMinus(ctx) {
		this.fun(1715 + "	visitUnaryExpressionNotPlusMinus")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postfixExpression.
	visitPostfixExpression(ctx) {
		this.fun(1722 + "	visitPostfixExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postIncrementExpression.
	visitPostIncrementExpression(ctx) {
		this.fun(1729 + "	visitPostIncrementExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postIncrementExpression_lf_postfixExpression.
	visitPostIncrementExpression_lf_postfixExpression(ctx) {
		this.fun(1736 + "	visitPostIncrementExpression_lf_postfixExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postDecrementExpression.
	visitPostDecrementExpression(ctx) {
		this.fun(1743 + "	visitPostDecrementExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#postDecrementExpression_lf_postfixExpression.
	visitPostDecrementExpression_lf_postfixExpression(ctx) {
		this.fun(1750 + "	visitPostDecrementExpression_lf_postfixExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#castExpression.
	visitCastExpression(ctx) {
		this.fun(1757 + "	visitCastExpression")
		return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by Java9Parser#identifier.
	visitIdentifier(ctx) {
		this.fun(1764 + "	visitIdentifier")
		if(this.classFlag == 1) {
			this.classStack.push(ctx.getText())
			this.classes.push({
				modifierClass: this.tmpClass.pop(),
				nameOfClass: ctx.getText()
			})
			this.classFlag = 0
		}
		else if(this.methodFlag == 1) {
			this.methodStack.push(ctx.getText())
			this.methods.push({
				className: this.classStack[this.classStack.length-1],
				modifierOfMethod: this.tmpMethod.pop(),
				typeOfMethod: this.tmpType.pop(),
				nameOfMethod: ctx.getText()
			})
			this.methodFlag = 0
		}
		else if(this.attributesFlag == 1){
			this.attributes.push({
				methodName: this.methodStack[this.methodStack.length-1],
				typeOfAttributes: this.tmpAttributes.pop(),
				nameOfAttributes: ctx.getText()
			})
			this.attributesFlag = 0
		}
		return this.visitChildren(ctx);
	}



}

module.exports = Java9Visitor