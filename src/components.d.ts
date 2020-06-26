/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SSAbdullakhBenefitsBots, } from "./components/s-abdullakh-performance-and-benefits/res/view/s-abdullakh-benefits-bots/interface/common.interface";
import { SSAbdullakhConsultation, } from "./components/s-abdullakh-consultation/interface/common.interface";
import { AbdullakhHeader, } from "./components/s-abdullakh-header/interface/common.interface";
import { AbdullakhHeaderCenter, } from "./components/s-abdullakh-header/res/view/s-abdullakh-header-center/interface/common.interface";
import { SSAbdullakhPerformanceInformation, } from "./components/s-abdullakh-performance-and-benefits/res/view/s-abdullakh-performance-information/interface/common.interface";
import { SSAbdullakhProductInformation, } from "./components/s-abdullakh-product-information/interface/common.interface";
import { SSAbdullakhProductPresentation, } from "./components/s-abdullakh-product-presentation/interface/common.interface";
import { SSAbdullakhTransitionCreateBot, } from "./components/s-abdullakh-transition-create-bot/interface/common.interface";
export namespace Components {
    interface MyComponent {
    }
    interface SAbdullakhBenefitsBots {
        /**
          * объект с массивом и данными BenefitsBots
         */
        "BenefitsBots": SSAbdullakhBenefitsBots;
    }
    interface SAbdullakhBenefitsBotsBlock {
        /**
          * данные переданные методом map компоненту BenefitsBotsBlock
         */
        "arr": any;
    }
    interface SAbdullakhConsultation {
        /**
          * данные компонента Consultation
         */
        "Consultation": SSAbdullakhConsultation;
        /**
          * данные компонента Consultation
         */
        "gear": any;
    }
    interface SAbdullakhForm {
        /**
          * данные из массива для компонента Form
         */
        "arr": any;
    }
    interface SAbdullakhFormClose {
    }
    interface SAbdullakhFormCommunication {
        /**
          * данные компонента FormCommunication
         */
        "formCommunication": any;
    }
    interface SAbdullakhHeader {
        /**
          * объект с массивом меню и string для подкомпонентов header-start header-end
         */
        "header": AbdullakhHeader;
    }
    interface SAbdullakhHeaderCenter {
        /**
          * объект с данными и для элементов меню
         */
        "arr": AbdullakhHeaderCenter;
    }
    interface SAbdullakhHeaderEnd {
        /**
          * number
         */
        "phoneNumber": string;
    }
    interface SAbdullakhHeaderStart {
        /**
          * объект с url logo
         */
        "logo": any;
    }
    interface SAbdullakhPerformanceAndBenefits {
        /**
          * объект с массивами компонентов PerformanceInformation, BenefitsBots
         */
        "PerformanceAndBenefits": any;
    }
    interface SAbdullakhPerformanceInformation {
        /**
          * массив для вывода элементов PerformanceInformation
         */
        "PerformanceInformation": SSAbdullakhPerformanceInformation;
    }
    interface SAbdullakhPerformanceInformationList {
        /**
          * объект с массивом и данными PerformanceInformationList
         */
        "PerformanceInformation": any;
        /**
          * объект с массивом и данными PerformanceInformationList
         */
        "endText": string;
    }
    interface SAbdullakhProductInformation {
        /**
          * данные из объекта для компонента ProductInformation
         */
        "ProductInformation": SSAbdullakhProductInformation;
    }
    interface SAbdullakhProductInformationBlocks {
        /**
          * объект с данными и для элементов компонента ProductInformationBlocks
         */
        "arr": any;
    }
    interface SAbdullakhProductPresentation {
        /**
          * массив для вывода элементов ProductPresentationTitle
         */
        "ProductPresentation": SSAbdullakhProductPresentation;
    }
    interface SAbdullakhProductPresentationImg {
        /**
          * массив для вывода url img в компоненете ProductPresentationImg
         */
        "img": any;
    }
    interface SAbdullakhProductPresentationTitle {
        /**
          * массив для вывода элементов ProductPresentationTitle
         */
        "arr": any;
        /**
          * массив для вывода элементов ProductPresentationTitle
         */
        "img": string;
    }
    interface SAbdullakhTariffs {
        /**
          * данные компонента Tariffs
         */
        "Tariffs": any;
    }
    interface SAbdullakhTariffsInfoBlocks {
        /**
          * данные переданные методом map компоненту TariffsBlocks
         */
        "arr": any;
    }
    interface SAbdullakhTransitionCreateBot {
        /**
          * массив для вывода элементов TransitionCreateBot
         */
        "TransitionCreateBot": SSAbdullakhTransitionCreateBot;
    }
    interface SAbdullakhTransitionCreateBotFollow {
        /**
          * массив для вывода элементов подкомпонента TransitionCreateBotFollow компонента TransitionCreateBot
         */
        "arr": any;
    }
    interface SAbdullakhTransitionCreateBotTitle {
        /**
          * массив для вывода элементов подкомпонента TransitionCreateBotTitle компонента TransitionCreateBot
         */
        "arr": any;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSAbdullakhBenefitsBotsElement extends Components.SAbdullakhBenefitsBots, HTMLStencilElement {
    }
    var HTMLSAbdullakhBenefitsBotsElement: {
        prototype: HTMLSAbdullakhBenefitsBotsElement;
        new (): HTMLSAbdullakhBenefitsBotsElement;
    };
    interface HTMLSAbdullakhBenefitsBotsBlockElement extends Components.SAbdullakhBenefitsBotsBlock, HTMLStencilElement {
    }
    var HTMLSAbdullakhBenefitsBotsBlockElement: {
        prototype: HTMLSAbdullakhBenefitsBotsBlockElement;
        new (): HTMLSAbdullakhBenefitsBotsBlockElement;
    };
    interface HTMLSAbdullakhConsultationElement extends Components.SAbdullakhConsultation, HTMLStencilElement {
    }
    var HTMLSAbdullakhConsultationElement: {
        prototype: HTMLSAbdullakhConsultationElement;
        new (): HTMLSAbdullakhConsultationElement;
    };
    interface HTMLSAbdullakhFormElement extends Components.SAbdullakhForm, HTMLStencilElement {
    }
    var HTMLSAbdullakhFormElement: {
        prototype: HTMLSAbdullakhFormElement;
        new (): HTMLSAbdullakhFormElement;
    };
    interface HTMLSAbdullakhFormCloseElement extends Components.SAbdullakhFormClose, HTMLStencilElement {
    }
    var HTMLSAbdullakhFormCloseElement: {
        prototype: HTMLSAbdullakhFormCloseElement;
        new (): HTMLSAbdullakhFormCloseElement;
    };
    interface HTMLSAbdullakhFormCommunicationElement extends Components.SAbdullakhFormCommunication, HTMLStencilElement {
    }
    var HTMLSAbdullakhFormCommunicationElement: {
        prototype: HTMLSAbdullakhFormCommunicationElement;
        new (): HTMLSAbdullakhFormCommunicationElement;
    };
    interface HTMLSAbdullakhHeaderElement extends Components.SAbdullakhHeader, HTMLStencilElement {
    }
    var HTMLSAbdullakhHeaderElement: {
        prototype: HTMLSAbdullakhHeaderElement;
        new (): HTMLSAbdullakhHeaderElement;
    };
    interface HTMLSAbdullakhHeaderCenterElement extends Components.SAbdullakhHeaderCenter, HTMLStencilElement {
    }
    var HTMLSAbdullakhHeaderCenterElement: {
        prototype: HTMLSAbdullakhHeaderCenterElement;
        new (): HTMLSAbdullakhHeaderCenterElement;
    };
    interface HTMLSAbdullakhHeaderEndElement extends Components.SAbdullakhHeaderEnd, HTMLStencilElement {
    }
    var HTMLSAbdullakhHeaderEndElement: {
        prototype: HTMLSAbdullakhHeaderEndElement;
        new (): HTMLSAbdullakhHeaderEndElement;
    };
    interface HTMLSAbdullakhHeaderStartElement extends Components.SAbdullakhHeaderStart, HTMLStencilElement {
    }
    var HTMLSAbdullakhHeaderStartElement: {
        prototype: HTMLSAbdullakhHeaderStartElement;
        new (): HTMLSAbdullakhHeaderStartElement;
    };
    interface HTMLSAbdullakhPerformanceAndBenefitsElement extends Components.SAbdullakhPerformanceAndBenefits, HTMLStencilElement {
    }
    var HTMLSAbdullakhPerformanceAndBenefitsElement: {
        prototype: HTMLSAbdullakhPerformanceAndBenefitsElement;
        new (): HTMLSAbdullakhPerformanceAndBenefitsElement;
    };
    interface HTMLSAbdullakhPerformanceInformationElement extends Components.SAbdullakhPerformanceInformation, HTMLStencilElement {
    }
    var HTMLSAbdullakhPerformanceInformationElement: {
        prototype: HTMLSAbdullakhPerformanceInformationElement;
        new (): HTMLSAbdullakhPerformanceInformationElement;
    };
    interface HTMLSAbdullakhPerformanceInformationListElement extends Components.SAbdullakhPerformanceInformationList, HTMLStencilElement {
    }
    var HTMLSAbdullakhPerformanceInformationListElement: {
        prototype: HTMLSAbdullakhPerformanceInformationListElement;
        new (): HTMLSAbdullakhPerformanceInformationListElement;
    };
    interface HTMLSAbdullakhProductInformationElement extends Components.SAbdullakhProductInformation, HTMLStencilElement {
    }
    var HTMLSAbdullakhProductInformationElement: {
        prototype: HTMLSAbdullakhProductInformationElement;
        new (): HTMLSAbdullakhProductInformationElement;
    };
    interface HTMLSAbdullakhProductInformationBlocksElement extends Components.SAbdullakhProductInformationBlocks, HTMLStencilElement {
    }
    var HTMLSAbdullakhProductInformationBlocksElement: {
        prototype: HTMLSAbdullakhProductInformationBlocksElement;
        new (): HTMLSAbdullakhProductInformationBlocksElement;
    };
    interface HTMLSAbdullakhProductPresentationElement extends Components.SAbdullakhProductPresentation, HTMLStencilElement {
    }
    var HTMLSAbdullakhProductPresentationElement: {
        prototype: HTMLSAbdullakhProductPresentationElement;
        new (): HTMLSAbdullakhProductPresentationElement;
    };
    interface HTMLSAbdullakhProductPresentationImgElement extends Components.SAbdullakhProductPresentationImg, HTMLStencilElement {
    }
    var HTMLSAbdullakhProductPresentationImgElement: {
        prototype: HTMLSAbdullakhProductPresentationImgElement;
        new (): HTMLSAbdullakhProductPresentationImgElement;
    };
    interface HTMLSAbdullakhProductPresentationTitleElement extends Components.SAbdullakhProductPresentationTitle, HTMLStencilElement {
    }
    var HTMLSAbdullakhProductPresentationTitleElement: {
        prototype: HTMLSAbdullakhProductPresentationTitleElement;
        new (): HTMLSAbdullakhProductPresentationTitleElement;
    };
    interface HTMLSAbdullakhTariffsElement extends Components.SAbdullakhTariffs, HTMLStencilElement {
    }
    var HTMLSAbdullakhTariffsElement: {
        prototype: HTMLSAbdullakhTariffsElement;
        new (): HTMLSAbdullakhTariffsElement;
    };
    interface HTMLSAbdullakhTariffsInfoBlocksElement extends Components.SAbdullakhTariffsInfoBlocks, HTMLStencilElement {
    }
    var HTMLSAbdullakhTariffsInfoBlocksElement: {
        prototype: HTMLSAbdullakhTariffsInfoBlocksElement;
        new (): HTMLSAbdullakhTariffsInfoBlocksElement;
    };
    interface HTMLSAbdullakhTransitionCreateBotElement extends Components.SAbdullakhTransitionCreateBot, HTMLStencilElement {
    }
    var HTMLSAbdullakhTransitionCreateBotElement: {
        prototype: HTMLSAbdullakhTransitionCreateBotElement;
        new (): HTMLSAbdullakhTransitionCreateBotElement;
    };
    interface HTMLSAbdullakhTransitionCreateBotFollowElement extends Components.SAbdullakhTransitionCreateBotFollow, HTMLStencilElement {
    }
    var HTMLSAbdullakhTransitionCreateBotFollowElement: {
        prototype: HTMLSAbdullakhTransitionCreateBotFollowElement;
        new (): HTMLSAbdullakhTransitionCreateBotFollowElement;
    };
    interface HTMLSAbdullakhTransitionCreateBotTitleElement extends Components.SAbdullakhTransitionCreateBotTitle, HTMLStencilElement {
    }
    var HTMLSAbdullakhTransitionCreateBotTitleElement: {
        prototype: HTMLSAbdullakhTransitionCreateBotTitleElement;
        new (): HTMLSAbdullakhTransitionCreateBotTitleElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "s-abdullakh-benefits-bots": HTMLSAbdullakhBenefitsBotsElement;
        "s-abdullakh-benefits-bots-block": HTMLSAbdullakhBenefitsBotsBlockElement;
        "s-abdullakh-consultation": HTMLSAbdullakhConsultationElement;
        "s-abdullakh-form": HTMLSAbdullakhFormElement;
        "s-abdullakh-form-close": HTMLSAbdullakhFormCloseElement;
        "s-abdullakh-form-communication": HTMLSAbdullakhFormCommunicationElement;
        "s-abdullakh-header": HTMLSAbdullakhHeaderElement;
        "s-abdullakh-header-center": HTMLSAbdullakhHeaderCenterElement;
        "s-abdullakh-header-end": HTMLSAbdullakhHeaderEndElement;
        "s-abdullakh-header-start": HTMLSAbdullakhHeaderStartElement;
        "s-abdullakh-performance-and-benefits": HTMLSAbdullakhPerformanceAndBenefitsElement;
        "s-abdullakh-performance-information": HTMLSAbdullakhPerformanceInformationElement;
        "s-abdullakh-performance-information-list": HTMLSAbdullakhPerformanceInformationListElement;
        "s-abdullakh-product-information": HTMLSAbdullakhProductInformationElement;
        "s-abdullakh-product-information-blocks": HTMLSAbdullakhProductInformationBlocksElement;
        "s-abdullakh-product-presentation": HTMLSAbdullakhProductPresentationElement;
        "s-abdullakh-product-presentation-img": HTMLSAbdullakhProductPresentationImgElement;
        "s-abdullakh-product-presentation-title": HTMLSAbdullakhProductPresentationTitleElement;
        "s-abdullakh-tariffs": HTMLSAbdullakhTariffsElement;
        "s-abdullakh-tariffs-info-blocks": HTMLSAbdullakhTariffsInfoBlocksElement;
        "s-abdullakh-transition-create-bot": HTMLSAbdullakhTransitionCreateBotElement;
        "s-abdullakh-transition-create-bot-follow": HTMLSAbdullakhTransitionCreateBotFollowElement;
        "s-abdullakh-transition-create-bot-title": HTMLSAbdullakhTransitionCreateBotTitleElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
    }
    interface SAbdullakhBenefitsBots {
        /**
          * объект с массивом и данными BenefitsBots
         */
        "BenefitsBots"?: SSAbdullakhBenefitsBots;
        /**
          * клик по элементам компонента BenefitsBots
         */
        "onClickOnBenefitsBots"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhBenefitsBotsBlock {
        /**
          * данные переданные методом map компоненту BenefitsBotsBlock
         */
        "arr"?: any;
        /**
          * клик по элементам компонента BenefitsBots
         */
        "onClickOnBenefitsBots"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhConsultation {
        /**
          * данные компонента Consultation
         */
        "Consultation"?: SSAbdullakhConsultation;
        /**
          * данные компонента Consultation
         */
        "gear"?: any;
        /**
          * клик по элементам компонента Consultation
         */
        "onClickOnConsultation"?: (event: CustomEvent<any>) => void;
        /**
          * Вызов модального окна формы
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhForm {
        /**
          * данные из массива для компонента Form
         */
        "arr"?: any;
    }
    interface SAbdullakhFormClose {
        /**
          * Закрытие модального окна формы
         */
        "onCloseForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhFormCommunication {
        /**
          * данные компонента FormCommunication
         */
        "formCommunication"?: any;
        /**
          * Закрытие модального окна формы
         */
        "onCloseForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhHeader {
        /**
          * объект с массивом меню и string для подкомпонентов header-start header-end
         */
        "header"?: AbdullakhHeader;
        /**
          * клик по элементам компонента header
         */
        "onClickOnHeader"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhHeaderCenter {
        /**
          * объект с данными и для элементов меню
         */
        "arr"?: AbdullakhHeaderCenter;
        /**
          * клик по элементу HeaderCenter (меню) компонента header
         */
        "onClickOnHeader"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhHeaderEnd {
        /**
          * клик по элементy HeaderEnd компонента header
         */
        "onClickOnHeader"?: (event: CustomEvent<any>) => void;
        /**
          * number
         */
        "phoneNumber"?: string;
    }
    interface SAbdullakhHeaderStart {
        /**
          * объект с url logo
         */
        "logo"?: any;
        /**
          * клик по элементу HeaderStart компонента header
         */
        "onClickOnHeader"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhPerformanceAndBenefits {
        /**
          * объект с массивами компонентов PerformanceInformation, BenefitsBots
         */
        "PerformanceAndBenefits"?: any;
        /**
          * клик по элементам компонента PerformanceAndBenefits
         */
        "onClickOnPerformanceAndBenefits"?: (event: CustomEvent<any>) => void;
        /**
          * открытие формы связи
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhPerformanceInformation {
        /**
          * массив для вывода элементов PerformanceInformation
         */
        "PerformanceInformation"?: SSAbdullakhPerformanceInformation;
        /**
          * клик по элементам компонента PerformanceInformation
         */
        "onClickOnPerformanceInformation"?: (event: CustomEvent<any>) => void;
        /**
          * Вызов модального окна формы
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhPerformanceInformationList {
        /**
          * объект с массивом и данными PerformanceInformationList
         */
        "PerformanceInformation"?: any;
        /**
          * объект с массивом и данными PerformanceInformationList
         */
        "endText"?: string;
        /**
          * клик по элементам компонента PerformanceInformation подкомпонента PerformanceInformationList
         */
        "onClickOnPerformanceInformation"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhProductInformation {
        /**
          * данные из объекта для компонента ProductInformation
         */
        "ProductInformation"?: SSAbdullakhProductInformation;
        /**
          * клик по элементам компонента ProductInformation
         */
        "onClickOnProductInformation"?: (event: CustomEvent<any>) => void;
        /**
          * Вызов модального окна формы
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhProductInformationBlocks {
        /**
          * объект с данными и для элементов компонента ProductInformationBlocks
         */
        "arr"?: any;
        /**
          * клик по элементам компонента ProductInformation
         */
        "onClickOnProductInformation"?: (event: CustomEvent<any>) => void;
        /**
          * Вызов модального окна формы
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhProductPresentation {
        /**
          * массив для вывода элементов ProductPresentationTitle
         */
        "ProductPresentation"?: SSAbdullakhProductPresentation;
        /**
          * клик по элементам компонента ProductPresentation
         */
        "onClickOnProductPresentation"?: (event: CustomEvent<any>) => void;
        /**
          * Вызов модального окна формы
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhProductPresentationImg {
        /**
          * массив для вывода url img в компоненете ProductPresentationImg
         */
        "img"?: any;
        /**
          * клик по элементам подкомпонента ProductPresentationImg компонента ProductPresentation
         */
        "onClickOnProductPresentation"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhProductPresentationTitle {
        /**
          * массив для вывода элементов ProductPresentationTitle
         */
        "arr"?: any;
        /**
          * массив для вывода элементов ProductPresentationTitle
         */
        "img"?: string;
        /**
          * клик по элементам компонента ProductPresentation подкомпонента ProductPresentationTitle
         */
        "onClickOnProductPresentation"?: (event: CustomEvent<any>) => void;
        /**
          * Вызов модального окна формы
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhTariffs {
        /**
          * данные компонента Tariffs
         */
        "Tariffs"?: any;
        /**
          * клик по элементам компонента Tariffs
         */
        "onClickOnTariffs"?: (event: CustomEvent<any>) => void;
        /**
          * Вызов модального окна формы
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhTariffsInfoBlocks {
        /**
          * данные переданные методом map компоненту TariffsBlocks
         */
        "arr"?: any;
        /**
          * клик по элементам компонента Tariffs
         */
        "onClickOnTariffs"?: (event: CustomEvent<any>) => void;
        /**
          * Вызов модального окна формы
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhTransitionCreateBot {
        /**
          * массив для вывода элементов TransitionCreateBot
         */
        "TransitionCreateBot"?: SSAbdullakhTransitionCreateBot;
        /**
          * клик по элементам компонента TransitionCreateBot
         */
        "onClickOnTransitionCreateBot"?: (event: CustomEvent<any>) => void;
        /**
          * Вызов модального окна формы
         */
        "onOpenForm"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhTransitionCreateBotFollow {
        /**
          * массив для вывода элементов подкомпонента TransitionCreateBotFollow компонента TransitionCreateBot
         */
        "arr"?: any;
        /**
          * клик по элементам компонента TransitionCreateBot
         */
        "onClickOnTransitionCreateBot"?: (event: CustomEvent<any>) => void;
    }
    interface SAbdullakhTransitionCreateBotTitle {
        /**
          * массив для вывода элементов подкомпонента TransitionCreateBotTitle компонента TransitionCreateBot
         */
        "arr"?: any;
        /**
          * клик по элементам компонента TransitionCreateBot
         */
        "onClickOnTransitionCreateBot"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "s-abdullakh-benefits-bots": SAbdullakhBenefitsBots;
        "s-abdullakh-benefits-bots-block": SAbdullakhBenefitsBotsBlock;
        "s-abdullakh-consultation": SAbdullakhConsultation;
        "s-abdullakh-form": SAbdullakhForm;
        "s-abdullakh-form-close": SAbdullakhFormClose;
        "s-abdullakh-form-communication": SAbdullakhFormCommunication;
        "s-abdullakh-header": SAbdullakhHeader;
        "s-abdullakh-header-center": SAbdullakhHeaderCenter;
        "s-abdullakh-header-end": SAbdullakhHeaderEnd;
        "s-abdullakh-header-start": SAbdullakhHeaderStart;
        "s-abdullakh-performance-and-benefits": SAbdullakhPerformanceAndBenefits;
        "s-abdullakh-performance-information": SAbdullakhPerformanceInformation;
        "s-abdullakh-performance-information-list": SAbdullakhPerformanceInformationList;
        "s-abdullakh-product-information": SAbdullakhProductInformation;
        "s-abdullakh-product-information-blocks": SAbdullakhProductInformationBlocks;
        "s-abdullakh-product-presentation": SAbdullakhProductPresentation;
        "s-abdullakh-product-presentation-img": SAbdullakhProductPresentationImg;
        "s-abdullakh-product-presentation-title": SAbdullakhProductPresentationTitle;
        "s-abdullakh-tariffs": SAbdullakhTariffs;
        "s-abdullakh-tariffs-info-blocks": SAbdullakhTariffsInfoBlocks;
        "s-abdullakh-transition-create-bot": SAbdullakhTransitionCreateBot;
        "s-abdullakh-transition-create-bot-follow": SAbdullakhTransitionCreateBotFollow;
        "s-abdullakh-transition-create-bot-title": SAbdullakhTransitionCreateBotTitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "s-abdullakh-benefits-bots": LocalJSX.SAbdullakhBenefitsBots & JSXBase.HTMLAttributes<HTMLSAbdullakhBenefitsBotsElement>;
            "s-abdullakh-benefits-bots-block": LocalJSX.SAbdullakhBenefitsBotsBlock & JSXBase.HTMLAttributes<HTMLSAbdullakhBenefitsBotsBlockElement>;
            "s-abdullakh-consultation": LocalJSX.SAbdullakhConsultation & JSXBase.HTMLAttributes<HTMLSAbdullakhConsultationElement>;
            "s-abdullakh-form": LocalJSX.SAbdullakhForm & JSXBase.HTMLAttributes<HTMLSAbdullakhFormElement>;
            "s-abdullakh-form-close": LocalJSX.SAbdullakhFormClose & JSXBase.HTMLAttributes<HTMLSAbdullakhFormCloseElement>;
            "s-abdullakh-form-communication": LocalJSX.SAbdullakhFormCommunication & JSXBase.HTMLAttributes<HTMLSAbdullakhFormCommunicationElement>;
            "s-abdullakh-header": LocalJSX.SAbdullakhHeader & JSXBase.HTMLAttributes<HTMLSAbdullakhHeaderElement>;
            "s-abdullakh-header-center": LocalJSX.SAbdullakhHeaderCenter & JSXBase.HTMLAttributes<HTMLSAbdullakhHeaderCenterElement>;
            "s-abdullakh-header-end": LocalJSX.SAbdullakhHeaderEnd & JSXBase.HTMLAttributes<HTMLSAbdullakhHeaderEndElement>;
            "s-abdullakh-header-start": LocalJSX.SAbdullakhHeaderStart & JSXBase.HTMLAttributes<HTMLSAbdullakhHeaderStartElement>;
            "s-abdullakh-performance-and-benefits": LocalJSX.SAbdullakhPerformanceAndBenefits & JSXBase.HTMLAttributes<HTMLSAbdullakhPerformanceAndBenefitsElement>;
            "s-abdullakh-performance-information": LocalJSX.SAbdullakhPerformanceInformation & JSXBase.HTMLAttributes<HTMLSAbdullakhPerformanceInformationElement>;
            "s-abdullakh-performance-information-list": LocalJSX.SAbdullakhPerformanceInformationList & JSXBase.HTMLAttributes<HTMLSAbdullakhPerformanceInformationListElement>;
            "s-abdullakh-product-information": LocalJSX.SAbdullakhProductInformation & JSXBase.HTMLAttributes<HTMLSAbdullakhProductInformationElement>;
            "s-abdullakh-product-information-blocks": LocalJSX.SAbdullakhProductInformationBlocks & JSXBase.HTMLAttributes<HTMLSAbdullakhProductInformationBlocksElement>;
            "s-abdullakh-product-presentation": LocalJSX.SAbdullakhProductPresentation & JSXBase.HTMLAttributes<HTMLSAbdullakhProductPresentationElement>;
            "s-abdullakh-product-presentation-img": LocalJSX.SAbdullakhProductPresentationImg & JSXBase.HTMLAttributes<HTMLSAbdullakhProductPresentationImgElement>;
            "s-abdullakh-product-presentation-title": LocalJSX.SAbdullakhProductPresentationTitle & JSXBase.HTMLAttributes<HTMLSAbdullakhProductPresentationTitleElement>;
            "s-abdullakh-tariffs": LocalJSX.SAbdullakhTariffs & JSXBase.HTMLAttributes<HTMLSAbdullakhTariffsElement>;
            "s-abdullakh-tariffs-info-blocks": LocalJSX.SAbdullakhTariffsInfoBlocks & JSXBase.HTMLAttributes<HTMLSAbdullakhTariffsInfoBlocksElement>;
            "s-abdullakh-transition-create-bot": LocalJSX.SAbdullakhTransitionCreateBot & JSXBase.HTMLAttributes<HTMLSAbdullakhTransitionCreateBotElement>;
            "s-abdullakh-transition-create-bot-follow": LocalJSX.SAbdullakhTransitionCreateBotFollow & JSXBase.HTMLAttributes<HTMLSAbdullakhTransitionCreateBotFollowElement>;
            "s-abdullakh-transition-create-bot-title": LocalJSX.SAbdullakhTransitionCreateBotTitle & JSXBase.HTMLAttributes<HTMLSAbdullakhTransitionCreateBotTitleElement>;
        }
    }
}
