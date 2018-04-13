package com.qianfeng.sw.queen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;

/**
 * 释放shiro /code=anon
 */
@Controller
public class CodeController {

    public static final String CODE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";//验证码符号
    public static final int W = 150; //宽
    public static final int H = 40;	 //高
    public static final Color[] COLORS = {Color.RED,Color.GREEN,Color.BLUE,Color.BLACK,
            Color.CYAN,Color.MAGENTA,Color.ORANGE,Color.PINK,
            Color.YELLOW};


    @RequestMapping("/code")
    public void getCode(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {        //创建图片对象
        BufferedImage img = new BufferedImage(W,H,BufferedImage.TYPE_INT_ARGB);
        //获得绘图对象
        Graphics g = img.getGraphics();
        //设置颜色
        g.setColor(Color.GRAY);
        //设置文字字体
        g.setFont(new Font("宋体",Font.PLAIN,30));
        //填充正方形空间，以便画图
        g.fillRect(0, 0, W, H);
        //保存验证字符
        char[] codes = new char[4];
        Random rand = new Random();
        for(int i = 0;i < codes.length;i++){
            //随机产生一个字符
            codes[i] = CODE.charAt(rand.nextInt(CODE.length()));
            //设置颜色
            g.setColor(COLORS[rand.nextInt(COLORS.length)]);
            //绘制文字
            g.drawString(""+codes[i], 20 + 30 * i, 30);
            g.setColor(COLORS[rand.nextInt(COLORS.length)]);
            //绘制线条
            g.drawLine(rand.nextInt(W), rand.nextInt(H),rand.nextInt(W), rand.nextInt(H));
        }
        //将正确验证码进行保存Session中
        req.getSession().setAttribute("code", new String(codes));
        //禁用缓存图片
        resp.addHeader("Cache-controll", "no-cache");
        //将图片发送给客户端
        ImageIO.write(img, "png", resp.getOutputStream());
    }
}
