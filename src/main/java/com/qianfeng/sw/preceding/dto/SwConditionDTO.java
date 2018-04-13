package com.qianfeng.sw.preceding.dto;

import java.io.Serializable;

/**
 * Created by asus on 2018/4/12.
 */
/**
 * 类型下条件
 * */
public class SwConditionDTO implements Serializable {
    private static final long serialVersionUID = 3L;

    /*
    * 条件id
    * **/
    private int swConditionId;

    /**
     * 条件姓名
     * */
    private String swConditionName;

    @Override
    public String toString() {
        return "SwConditionDTO{" +
                "swConditionId=" + swConditionId +
                ", swConditionName='" + swConditionName + '\'' +
                '}';
    }

    public int getSwConditionId() {
        return swConditionId;
    }

    public void setSwConditionId(int swConditionId) {
        this.swConditionId = swConditionId;
    }

    public String getSwConditionName() {
        return swConditionName;
    }

    public void setSwConditionName(String swConditionName) {
        this.swConditionName = swConditionName;
    }
}
