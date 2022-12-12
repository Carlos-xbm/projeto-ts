'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">projeto-ts documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-a0945b5d57d4592f86564dc6cf93ddfb8878474f2d40ddd84e857d62690f8ea0a328f957eae372e1d1327349548197eab759e9b0119728d85217db2948b2c169"' : 'data-target="#xs-controllers-links-module-AppModule-a0945b5d57d4592f86564dc6cf93ddfb8878474f2d40ddd84e857d62690f8ea0a328f957eae372e1d1327349548197eab759e9b0119728d85217db2948b2c169"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a0945b5d57d4592f86564dc6cf93ddfb8878474f2d40ddd84e857d62690f8ea0a328f957eae372e1d1327349548197eab759e9b0119728d85217db2948b2c169"' :
                                            'id="xs-controllers-links-module-AppModule-a0945b5d57d4592f86564dc6cf93ddfb8878474f2d40ddd84e857d62690f8ea0a328f957eae372e1d1327349548197eab759e9b0119728d85217db2948b2c169"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a0945b5d57d4592f86564dc6cf93ddfb8878474f2d40ddd84e857d62690f8ea0a328f957eae372e1d1327349548197eab759e9b0119728d85217db2948b2c169"' : 'data-target="#xs-injectables-links-module-AppModule-a0945b5d57d4592f86564dc6cf93ddfb8878474f2d40ddd84e857d62690f8ea0a328f957eae372e1d1327349548197eab759e9b0119728d85217db2948b2c169"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a0945b5d57d4592f86564dc6cf93ddfb8878474f2d40ddd84e857d62690f8ea0a328f957eae372e1d1327349548197eab759e9b0119728d85217db2948b2c169"' :
                                        'id="xs-injectables-links-module-AppModule-a0945b5d57d4592f86564dc6cf93ddfb8878474f2d40ddd84e857d62690f8ea0a328f957eae372e1d1327349548197eab759e9b0119728d85217db2948b2c169"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-aac10f730f878a67b5a87088501fd5136cc7901304de1aaa95a3f8370def891bf0c560344ca9ffc10caa1579abaa0dac5a291cb8a6cb02e5756d1763bd864eaf"' : 'data-target="#xs-controllers-links-module-AuthModule-aac10f730f878a67b5a87088501fd5136cc7901304de1aaa95a3f8370def891bf0c560344ca9ffc10caa1579abaa0dac5a291cb8a6cb02e5756d1763bd864eaf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-aac10f730f878a67b5a87088501fd5136cc7901304de1aaa95a3f8370def891bf0c560344ca9ffc10caa1579abaa0dac5a291cb8a6cb02e5756d1763bd864eaf"' :
                                            'id="xs-controllers-links-module-AuthModule-aac10f730f878a67b5a87088501fd5136cc7901304de1aaa95a3f8370def891bf0c560344ca9ffc10caa1579abaa0dac5a291cb8a6cb02e5756d1763bd864eaf"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-aac10f730f878a67b5a87088501fd5136cc7901304de1aaa95a3f8370def891bf0c560344ca9ffc10caa1579abaa0dac5a291cb8a6cb02e5756d1763bd864eaf"' : 'data-target="#xs-injectables-links-module-AuthModule-aac10f730f878a67b5a87088501fd5136cc7901304de1aaa95a3f8370def891bf0c560344ca9ffc10caa1579abaa0dac5a291cb8a6cb02e5756d1763bd864eaf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-aac10f730f878a67b5a87088501fd5136cc7901304de1aaa95a3f8370def891bf0c560344ca9ffc10caa1579abaa0dac5a291cb8a6cb02e5756d1763bd864eaf"' :
                                        'id="xs-injectables-links-module-AuthModule-aac10f730f878a67b5a87088501fd5136cc7901304de1aaa95a3f8370def891bf0c560344ca9ffc10caa1579abaa0dac5a291cb8a6cb02e5756d1763bd864eaf"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/jwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >jwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-26714cb60939693fa00881ade5d34e4edd1c3e75fd5c36a8957d41e910bbeb3719fcfa854ddf740713f1d81d4c68b14d3830ec3befa2c8deb799acd3e0066f06"' : 'data-target="#xs-controllers-links-module-OrderModule-26714cb60939693fa00881ade5d34e4edd1c3e75fd5c36a8957d41e910bbeb3719fcfa854ddf740713f1d81d4c68b14d3830ec3befa2c8deb799acd3e0066f06"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-26714cb60939693fa00881ade5d34e4edd1c3e75fd5c36a8957d41e910bbeb3719fcfa854ddf740713f1d81d4c68b14d3830ec3befa2c8deb799acd3e0066f06"' :
                                            'id="xs-controllers-links-module-OrderModule-26714cb60939693fa00881ade5d34e4edd1c3e75fd5c36a8957d41e910bbeb3719fcfa854ddf740713f1d81d4c68b14d3830ec3befa2c8deb799acd3e0066f06"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-26714cb60939693fa00881ade5d34e4edd1c3e75fd5c36a8957d41e910bbeb3719fcfa854ddf740713f1d81d4c68b14d3830ec3befa2c8deb799acd3e0066f06"' : 'data-target="#xs-injectables-links-module-OrderModule-26714cb60939693fa00881ade5d34e4edd1c3e75fd5c36a8957d41e910bbeb3719fcfa854ddf740713f1d81d4c68b14d3830ec3befa2c8deb799acd3e0066f06"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-26714cb60939693fa00881ade5d34e4edd1c3e75fd5c36a8957d41e910bbeb3719fcfa854ddf740713f1d81d4c68b14d3830ec3befa2c8deb799acd3e0066f06"' :
                                        'id="xs-injectables-links-module-OrderModule-26714cb60939693fa00881ade5d34e4edd1c3e75fd5c36a8957d41e910bbeb3719fcfa854ddf740713f1d81d4c68b14d3830ec3befa2c8deb799acd3e0066f06"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-91daf21c0618a21186c31f0f0152a19770184c9ea290c7f89c760d2a09278478943fe2e5cf12e57efb2ace67b428ec19aac28a2eb752ae4c819a789e5a788052"' : 'data-target="#xs-injectables-links-module-PrismaModule-91daf21c0618a21186c31f0f0152a19770184c9ea290c7f89c760d2a09278478943fe2e5cf12e57efb2ace67b428ec19aac28a2eb752ae4c819a789e5a788052"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-91daf21c0618a21186c31f0f0152a19770184c9ea290c7f89c760d2a09278478943fe2e5cf12e57efb2ace67b428ec19aac28a2eb752ae4c819a789e5a788052"' :
                                        'id="xs-injectables-links-module-PrismaModule-91daf21c0618a21186c31f0f0152a19770184c9ea290c7f89c760d2a09278478943fe2e5cf12e57efb2ace67b428ec19aac28a2eb752ae4c819a789e5a788052"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-e6d2f4369f5d3632e805e2dac105d7a37e4095a9cfad21f8005ddb80eef4da353d803f2884178ebfbd8231a3f090d481f27baffdfa9700074d05ef0740a497ea"' : 'data-target="#xs-controllers-links-module-ProductModule-e6d2f4369f5d3632e805e2dac105d7a37e4095a9cfad21f8005ddb80eef4da353d803f2884178ebfbd8231a3f090d481f27baffdfa9700074d05ef0740a497ea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-e6d2f4369f5d3632e805e2dac105d7a37e4095a9cfad21f8005ddb80eef4da353d803f2884178ebfbd8231a3f090d481f27baffdfa9700074d05ef0740a497ea"' :
                                            'id="xs-controllers-links-module-ProductModule-e6d2f4369f5d3632e805e2dac105d7a37e4095a9cfad21f8005ddb80eef4da353d803f2884178ebfbd8231a3f090d481f27baffdfa9700074d05ef0740a497ea"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-e6d2f4369f5d3632e805e2dac105d7a37e4095a9cfad21f8005ddb80eef4da353d803f2884178ebfbd8231a3f090d481f27baffdfa9700074d05ef0740a497ea"' : 'data-target="#xs-injectables-links-module-ProductModule-e6d2f4369f5d3632e805e2dac105d7a37e4095a9cfad21f8005ddb80eef4da353d803f2884178ebfbd8231a3f090d481f27baffdfa9700074d05ef0740a497ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-e6d2f4369f5d3632e805e2dac105d7a37e4095a9cfad21f8005ddb80eef4da353d803f2884178ebfbd8231a3f090d481f27baffdfa9700074d05ef0740a497ea"' :
                                        'id="xs-injectables-links-module-ProductModule-e6d2f4369f5d3632e805e2dac105d7a37e4095a9cfad21f8005ddb80eef4da353d803f2884178ebfbd8231a3f090d481f27baffdfa9700074d05ef0740a497ea"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TableModule-3c5262a9d1d0c6026fa96c268d7d5cdcd98dd8363d58b558787f9955dd05a3398bc9076289f71232247fec552d857fd947eb628c6bc8c0976fa6456bbfd78d49"' : 'data-target="#xs-controllers-links-module-TableModule-3c5262a9d1d0c6026fa96c268d7d5cdcd98dd8363d58b558787f9955dd05a3398bc9076289f71232247fec552d857fd947eb628c6bc8c0976fa6456bbfd78d49"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TableModule-3c5262a9d1d0c6026fa96c268d7d5cdcd98dd8363d58b558787f9955dd05a3398bc9076289f71232247fec552d857fd947eb628c6bc8c0976fa6456bbfd78d49"' :
                                            'id="xs-controllers-links-module-TableModule-3c5262a9d1d0c6026fa96c268d7d5cdcd98dd8363d58b558787f9955dd05a3398bc9076289f71232247fec552d857fd947eb628c6bc8c0976fa6456bbfd78d49"' }>
                                            <li class="link">
                                                <a href="controllers/TableController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableModule-3c5262a9d1d0c6026fa96c268d7d5cdcd98dd8363d58b558787f9955dd05a3398bc9076289f71232247fec552d857fd947eb628c6bc8c0976fa6456bbfd78d49"' : 'data-target="#xs-injectables-links-module-TableModule-3c5262a9d1d0c6026fa96c268d7d5cdcd98dd8363d58b558787f9955dd05a3398bc9076289f71232247fec552d857fd947eb628c6bc8c0976fa6456bbfd78d49"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-3c5262a9d1d0c6026fa96c268d7d5cdcd98dd8363d58b558787f9955dd05a3398bc9076289f71232247fec552d857fd947eb628c6bc8c0976fa6456bbfd78d49"' :
                                        'id="xs-injectables-links-module-TableModule-3c5262a9d1d0c6026fa96c268d7d5cdcd98dd8363d58b558787f9955dd05a3398bc9076289f71232247fec552d857fd947eb628c6bc8c0976fa6456bbfd78d49"' }>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-aed9d5142b87254b3f26463ee7b0e8a38491246f0dc4051b323bf9bd51bea4c23aa714e6517831f25fb30152c5ab6f76ba3ddeed96e3c9af65401afb81cbeace"' : 'data-target="#xs-controllers-links-module-UserModule-aed9d5142b87254b3f26463ee7b0e8a38491246f0dc4051b323bf9bd51bea4c23aa714e6517831f25fb30152c5ab6f76ba3ddeed96e3c9af65401afb81cbeace"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-aed9d5142b87254b3f26463ee7b0e8a38491246f0dc4051b323bf9bd51bea4c23aa714e6517831f25fb30152c5ab6f76ba3ddeed96e3c9af65401afb81cbeace"' :
                                            'id="xs-controllers-links-module-UserModule-aed9d5142b87254b3f26463ee7b0e8a38491246f0dc4051b323bf9bd51bea4c23aa714e6517831f25fb30152c5ab6f76ba3ddeed96e3c9af65401afb81cbeace"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-aed9d5142b87254b3f26463ee7b0e8a38491246f0dc4051b323bf9bd51bea4c23aa714e6517831f25fb30152c5ab6f76ba3ddeed96e3c9af65401afb81cbeace"' : 'data-target="#xs-injectables-links-module-UserModule-aed9d5142b87254b3f26463ee7b0e8a38491246f0dc4051b323bf9bd51bea4c23aa714e6517831f25fb30152c5ab6f76ba3ddeed96e3c9af65401afb81cbeace"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-aed9d5142b87254b3f26463ee7b0e8a38491246f0dc4051b323bf9bd51bea4c23aa714e6517831f25fb30152c5ab6f76ba3ddeed96e3c9af65401afb81cbeace"' :
                                        'id="xs-injectables-links-module-UserModule-aed9d5142b87254b3f26463ee7b0e8a38491246f0dc4051b323bf9bd51bea4c23aa714e6517831f25fb30152c5ab6f76ba3ddeed96e3c9af65401afb81cbeace"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TableController.html" data-type="entity-link" >TableController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderProductDto.html" data-type="entity-link" >CreateOrderProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableDto.html" data-type="entity-link" >CreateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Table.html" data-type="entity-link" >Table</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderDto.html" data-type="entity-link" >UpdateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTableDto.html" data-type="entity-link" >UpdateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/jwtStrategy.html" data-type="entity-link" >jwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});