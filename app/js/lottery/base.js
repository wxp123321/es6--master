/**
 * Created by XP on 2017/12/13.
 */
class Base{
    initPlayList(){
        this.play_list.set('r2',{
            bonus:6,
            tip:'22222',
            name:"任二"
        }).set('r3',{
            bonus:19,
            tip:'33333',
            name:"任三"
        }).set('r4',{
            bonus:78,
            tip:'44444',
            name:"任四"
        }).set('r5',{
            bonus:540,
            tip:'55555',
            name:"任五"
        }).set('r6',{
            bonus:90,
            tip:'66666',
            name:"任六"
        }).set('r7',{
            bonus:26,
            tip:'77777',
            name:"任七"
        }).set('r8',{
            bonus:9,
            tip:'88888',
            name:"任八"
        })
    }

    initNumber(){
        for(let i = 0;i < 12;i++){
            this.number.add((''+i).padStart(2,'0'));
        }
    }

    setOmit(omit){
        let self = this;
        self.omit.clear();
        for(let [index,item] of omit.entries()){
            self.omit.set(index,item)
        }
        $(self.omit_el).each(function (index,item) {
            $(item).text(self.omit.get(index))
        });
    }

    setOpenCode(code){
        let self = this;
        self.open_code.clear();
        for(let item of code.values()){
            self.open_code.add(item);
        }
        self.updateOpenCode && self.updateOpenCode.call(self,code);
    }

    toggleCodeActive(e){
        let self = this;
        let $cur = $(e.currentTarget);
        $cur.toggleClass('btn-boll-active');
        self.getCount();
    }

    changePlayNav(e){
        let self = this;
        let $cur = $(e.currentTarget);
        $cur.addClass('active').siblings().removeClass('active');
        self.cur_play = $cur.attr('desc').toLocaleLowerCase();
        $('#zx_sm span').html(self.play_list.get(self.cur_play).tip);
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        self.getCount();
    }

    assistHandle(e){
        e.preventDefault();
        let self = this;
        let $cur = $(e.currentTarget);
        let index = $cur.index();
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        if(index == 0){
            $(".boll-list .btn-boll").addClass('btn-boll-active');
        }
        if(index === 1){
            $('.boll-list .btn-boll').each(function (i,t) {
                if(t.textContent-5 > 0){
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if(index === 2){
            $('.boll-list .btn-boll').each(function (i,t) {
                if(t.textContent-6 > 0){
                    $(t).addClass('btn-boll-active')
                }
            })
        }

        if(index === 3){
            $('.boll-list .btn-boll').each(function (i,t) {
                if(t.textContent%2 == 1){
                    $(t).addClass('btn-boll-active')
                }
            })
        }

        if(index === 4){
            $('.boll-list .btn-boll').each(function (i,t) {
                if(t.textContent%2 == 0){
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        self.getCount();
    }

    getName(){
        return this.name;
    }

    addCode(){
        let self = this;
        let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g);
        let active = $active?$active.length:0;
        let count = self.computeCount(active,self,cur_play);
        if(count){
            self.addCodeItem($active.join(''),self.cur_play,self.play_list.get(self.cur_play).name,count);
        }
    }

    addCodeItem(code,type,typeName,count){
        let self = this;
        //字符串模板 可用${}代替数据
        const tpl = `
            html代码
        `;
        $(self.cart_el).append(tpl);
        self.getToal();
    }

    getCount(){
        let self = this;
        let active = $('.boll-list .btn-boll-active').length;
        let count = self.computeCount(active,self,cur_play);
        let range = self.computeBonus(active,self.cur_play);
        let money = count*2;
        let win1 = range[0] - money;
        let win2 = range[1] - money;
        let tpl;
        let c1 = (win1<0&&win2<0)?Math.abs(win1):win1;
        let c2 = (win1<0&&win2<0)?Math.abs(win2):win2;
        if(count === 0){
            tpl = `html`
        }else if(range[0] === range[1]){
            tpl = `html`
        }else{
            tpl = `html`
        }
        $('.sel_info').html(tpl);
    }

    getTotal(){
        let count = 0;
        $('.codelist li').each(function (index,item) {
            count+=$(item).attr(count)*1;
        })
        $('#count').text(count);
        $('#money').text(count*2);
    }

    getRandom(num){
        let arr = [], index;
        let number = Array.from(this.number);
        while(num--){
            index = Number.parseInt(Math.random()*number.length);
            arr.push(number[index]);
            number.splice(index,1);
        }
        return arr.join(' ')
    }

    getRandomCode(e){
        e.preventDefault();
        let num = e.currentTarget.getAttribute('count');
        let self = this;
        if(num === '0'){
            $(self.cart_el).html('')
        }else{
            for(let i = 0;i < num;i++){
                self.addCodeItem(self.getRandom(play),self.cur_play,self.play_list.get(self.cur_play).name,1);
            }
        }
    }
}

export default Base