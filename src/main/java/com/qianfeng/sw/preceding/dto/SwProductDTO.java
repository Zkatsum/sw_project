package com.qianfeng.sw.preceding.dto;

import java.io.Serializable;

/**
 * Created by asus on 2018/4/12.
 */
/**
 * 商品表
 */
public class SwProductDTO implements Serializable {

    private static final long serialVersionUID = 10L;

    /**
     * 商品id
     * */
    private int swProductId;

    /**
     * 商品名称
     * */
    private String swProductName;

    /**
     * 商品编号
     * */
    private int swProductNumber;

    /**
     * 商品最低价格
     * */
    private int swProductPrice;

    /**
     * 商品销量
     * */
    private int swProductSellnumber;

    /**
     * 商品图片
     * */
    private String swProductImage;


}
